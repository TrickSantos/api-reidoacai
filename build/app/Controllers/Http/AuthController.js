"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecuperarSenha_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Mailers/RecuperarSenha"));
const Users_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Users"));
class AuthController {
    async login({ request, response, auth }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '7 days',
            });
            await Users_1.default.findOrFail(token.user.id).then(async (user) => {
                await user.load('empresa');
                await user.load('cargo');
                response.status(200).send({ ...token, user });
            });
        }
        catch (error) {
            if (error.code === 'E_INVALID_AUTH_UID' || error.code === 'E_INVALID_AUTH_PASSWORD') {
                return response
                    .status(500)
                    .send({ errors: [{ message: 'Email ou senha invalidos, favor tentar novamente.' }] });
            }
            else {
                console.log(error);
                return response.status(500).send({
                    errors: [{ message: 'Ocorreu um erro durante a autenticação, favor tentar novamente.' }],
                });
            }
        }
    }
    async logout({ response, auth }) {
        try {
            return await auth.use('api').logout();
        }
        catch (error) {
            return response.status(500).send({
                errors: [{ message: 'Ocorreu um erro durante a autenticação, favor tentar novamente.' }],
            });
        }
    }
    async recuperar({ request, response, auth }) {
        const { email } = request.all();
        try {
            const user = await Users_1.default.findByOrFail('email', email);
            const token = await auth.use('api').generate(user, {
                expiresIn: '15min',
            });
            await new RecuperarSenha_1.default(user, token.token).send();
            return response.status(200).send([{ message: 'Email enviado com sucesso' }]);
        }
        catch (error) {
            if (error.code === 'E_ROW_NOT_FOUND') {
                return response
                    .status(500)
                    .send({ errors: [{ message: 'Este email não existe, tente novamente' }] });
            }
            else {
                return response
                    .status(500)
                    .send({ errors: [{ message: 'Erro ao processar requisição, tente novamente' }] });
            }
        }
    }
    async redefinir({ request, response, auth }) {
        const { password } = request.all();
        try {
            const user = auth.user;
            user?.merge({ password });
            await user?.save();
            return response.status(200).send([{ message: 'Senha alterada com sucesso' }]);
        }
        catch (error) {
            console.log(error);
            if (error.code === 'E_ROW_NOT_FOUND') {
                return response
                    .status(500)
                    .send({ errors: [{ message: 'Este email não existe, tente novamente' }] });
            }
            else {
                return response
                    .status(500)
                    .send({ errors: [{ message: 'Erro ao processar requisição, tente novamente' }] });
            }
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map