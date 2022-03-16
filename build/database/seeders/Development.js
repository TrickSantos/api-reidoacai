"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Empresa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Empresa"));
const base = {
    criar: true,
    visualizar: true,
    atualizar: true,
    apagar: true,
};
class DevelopmentSeeder extends Seeder_1.default {
    async run() {
        await Empresa_1.default.create({
            cnpjCpf: '40072516000166',
            razaoSocial: 'TrickSantos Soluções para Informática',
            nomeFantasia: 'Patrick Adan Santana dos Santos 04786299154',
            email: 'patrick.tafa@gmail.com',
            telefone: '65996363123',
            status: true,
            plano: 'Admin',
        }).then(async (empresa) => {
            await empresa.related('clientes').create({
                nome: 'Consumidor Final',
                telefone: '65999999999',
            });
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
                pedidos: base,
                fornecedores: base,
                produtos: base,
                unidades: base,
            })
                .then(async (cargo) => {
                await cargo.related('users').create({
                    empresaId: empresa.id,
                    nome: 'Patrick Adan',
                    email: 'patrick.tafa@gmail.com',
                    cpf: '04786299154',
                    password: 'telecom6831',
                });
            });
        });
    }
}
exports.default = DevelopmentSeeder;
DevelopmentSeeder.developmentOnly = true;
//# sourceMappingURL=Development.js.map