"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Mail");
const View_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/View"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const mjml_1 = __importDefault(require("mjml"));
class NovaEmpresa extends Mail_1.BaseMailer {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    async prepare(message) {
        const html = mjml_1.default(await View_1.default.render('emails/nova_empresa', {
            nome: this.empresa.nomeFantasia,
            url: Env_1.default.get('FRONT_END_URL'),
        })).html;
        message
            .subject('Bem vindo ao Meu Controle')
            .from('noreply@meucontrole.net.br')
            .to(this.empresa.email)
            .html(html);
    }
}
exports.default = NovaEmpresa;
//# sourceMappingURL=NovaEmpresa.js.map