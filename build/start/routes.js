"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/uf', 'UfsController.index').middleware('auth');
Route_1.default.resource('/empresa', 'EmpresasController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/cliente', 'ClientesController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/fornecedor', 'FornecedoresController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/produto', 'ProdutosController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/unidade', 'UnidadesController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/pedido', 'PedidosController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/usuario', 'UsersController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/movimentacao', 'CaixasController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/cargo', 'CargosController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/receber', 'RecebersController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/pagar', 'PagarController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.resource('/estoque', 'EstoquesController').apiOnly().middleware({ '*': 'auth' });
Route_1.default.put('/add_produto/:id', 'PedidosController.addAdicional').middleware('auth');
Route_1.default.put('/remove_produto/:id', 'PedidosController.removeAdicional').middleware('auth');
Route_1.default.put('/finalizar_pedido/:id', 'PedidosController.pagar').middleware('auth');
Route_1.default.post('/abrir', 'CaixasController.abrirCaixa').middleware('auth');
Route_1.default.get('/verifica_caixa', 'CaixasController.verificarCaixa').middleware('auth');
Route_1.default.put('/fechar/:id', 'CaixasController.fecharCaixa').middleware('auth');
Route_1.default.put('/reabrir/:id', 'CaixasController.reabrirCaixa').middleware('auth');
Route_1.default.put('/dar_baixa_receber/:id', 'ReceBersController.darBaixa').middleware('auth');
Route_1.default.put('/dar_baixa_pagar/:id', 'PagarController.darBaixa').middleware('auth');
Route_1.default.post('/redefinir', 'AuthController.redefinir').middleware('auth');
Route_1.default.post('/nova_empresa', 'EmpresasController.store');
Route_1.default.post('/login', 'AuthController.login');
Route_1.default.post('/logout', 'AuthController.logout');
Route_1.default.post('/recuperar', 'AuthController.recuperar');
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
//# sourceMappingURL=routes.js.map