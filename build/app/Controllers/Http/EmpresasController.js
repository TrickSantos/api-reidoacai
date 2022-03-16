"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Empresa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Empresa"));
const NovaEmpresa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Mailers/NovaEmpresa"));
const base = {
    criar: true,
    visualizar: true,
    atualizar: true,
    apagar: true,
};
class EmpresasController {
    async index({ response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.empresas.visualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Empresa_1.default.all().then((empresas) => response.status(200).send(empresas));
        }
        catch (error) {
            console.log(error.message);
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
    async store({ request, response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.empresas.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    razaoSocial: Validator_1.schema.string({}, [
                        Validator_1.rules.unique({ table: 'empresas', column: 'razao_social' }),
                    ]),
                    nomeFantasia: Validator_1.schema.string({}, [
                        Validator_1.rules.unique({ table: 'empresas', column: 'nome_fantasia' }),
                    ]),
                    cnpjCpf: Validator_1.schema.string({}, [Validator_1.rules.unique({ table: 'empresas', column: 'cnpj_cpf' })]),
                    email: Validator_1.schema.string({}, [
                        Validator_1.rules.email(),
                        Validator_1.rules.unique({ table: 'empresas', column: 'email' }),
                        Validator_1.rules.unique({ table: 'users', column: 'email' }),
                    ]),
                    telefone: Validator_1.schema.string.optional({}, [
                        Validator_1.rules.mobile({
                            locales: ['pt-BR'],
                        }),
                    ]),
                    endereco: Validator_1.schema.string.optional(),
                    plano: Validator_1.schema.enum.optional(['Admin', 'Basico']),
                    status: Validator_1.schema.boolean.optional(),
                }),
                messages: {
                    'razaoSocial.required': 'A Razão Social precisa ser informada',
                    'nomeFantasia.required': 'O Nome Fantasia precisa ser informado',
                    'cnpjCpf.required': 'O CNPJ/CPF precisa ser informado',
                    'email.required': 'O email precisa ser informado',
                    'email.email': 'O email precisa ser um email valido',
                    'email.unique': 'O email já está sendo usado',
                    'telefone.mobile': 'O telefone precisa estar num formato válido',
                },
            })
                .then(async (data) => {
                await Database_1.default.transaction(async (trx) => {
                    const empresa = new Empresa_1.default();
                    empresa.merge(data);
                    empresa.useTransaction(trx);
                    await empresa.save();
                    await empresa
                        .related('cargos')
                        .create({
                        nome: 'Super Admin',
                        aPagar: base,
                        aReceber: base,
                        caixa: base,
                        empresas: base,
                        usuarios: base,
                        cargos: base,
                        clientes: base,
                        fornecedores: base,
                        pedidos: base,
                        unidades: base,
                        produtos: base,
                        estoque: base,
                    })
                        .then(async (cargo) => {
                        cargo.useTransaction(trx);
                        await cargo
                            .related('users')
                            .create({
                            nome: 'Administrador',
                            cpf: empresa.cnpjCpf,
                            email: empresa.email,
                            password: empresa.cnpjCpf,
                            empresaId: empresa.id,
                        })
                            .then(async (user) => {
                            user.useTransaction(trx);
                            await empresa
                                .related('clientes')
                                .create({
                                nome: 'Consumidor Final',
                                telefone: '65999999999',
                            })
                                .then(async () => {
                                await trx.commit();
                                await new NovaEmpresa_1.default(empresa).send();
                                response.status(200).send(empresa);
                            });
                        })
                            .catch(async (e) => {
                            await trx.rollback();
                            throw new Error(e);
                        });
                    });
                });
            });
        }
        catch (error) {
            if (error.messages) {
                return response.status(500).send(error.messages);
            }
            else {
                return response.status(500).send({ errors: [{ message: error.message }] });
            }
        }
    }
    async update({ request, response, params, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.empresas.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    razaoSocial: Validator_1.schema.string.optional({}, [
                        Validator_1.rules.unique({ table: 'empresas', column: 'razao_social' }),
                    ]),
                    nomeFantasia: Validator_1.schema.string.optional({}, [
                        Validator_1.rules.unique({ table: 'empresas', column: 'nome_fantasia' }),
                    ]),
                    cnpjCpf: Validator_1.schema.string.optional({}, [
                        Validator_1.rules.unique({ table: 'empresas', column: 'cnpj_cpf' }),
                    ]),
                    email: Validator_1.schema.string.optional({}, [
                        Validator_1.rules.email(),
                        Validator_1.rules.unique({ table: 'empresas', column: 'email' }),
                    ]),
                    plano: Validator_1.schema.enum.optional(['Admin', 'Basico']),
                    telefone: Validator_1.schema.string.optional({}, [
                        Validator_1.rules.mobile({
                            locales: ['pt-BR'],
                        }),
                    ]),
                    endereco: Validator_1.schema.string.optional(),
                    status: Validator_1.schema.boolean.optional(),
                }),
                messages: {
                    'email.email': 'O email precisa ser um email valido',
                    'telefone.mobile': 'O telefone precisa estar num formato válido',
                },
            })
                .then(async (data) => {
                const { id } = params;
                await Empresa_1.default.findOrFail(id).then(async (empresa) => {
                    empresa.merge(data);
                    await empresa.save();
                    return response.status(200).send(empresa);
                });
            });
        }
        catch (error) {
            if (error.messages) {
                return response.status(500).send(error.messages);
            }
            else {
                return response.status(500).send({ errors: [{ message: error.message }] });
            }
        }
    }
    async destroy({ response, params, auth: { user } }) {
        try {
            const { id } = params;
            await user?.load('cargo');
            if (!user?.cargo.empresas.apagar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Empresa_1.default.findOrFail(id).then(async (empresa) => {
                await empresa.delete();
                return response.status(200);
            });
        }
        catch (error) {
            console.log(error.message);
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
}
exports.default = EmpresasController;
//# sourceMappingURL=EmpresasController.js.map