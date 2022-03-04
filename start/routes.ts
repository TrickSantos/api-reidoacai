import Route from '@ioc:Adonis/Core/Route'

Route.get('/uf', 'UfsController.index').middleware('auth')
Route.resource('/empresa', 'EmpresasController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/cliente', 'ClientesController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/fornecedores', 'FornecedoresController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/adicional', 'AdicionaisController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/unidade', 'UnidadesController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/pedido', 'PedidosController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/usuario', 'UsersController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/movimentacao', 'CaixasController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/cargo', 'CargosController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/receber', 'RecebersController').apiOnly().middleware({ '*': 'auth' })
Route.resource('/pagar', 'PagarController').apiOnly().middleware({ '*': 'auth' })
Route.put('/add_adicional/:id', 'PedidosController.addAdicional').middleware('auth')
Route.put('/remove_adicional/:id', 'PedidosController.removeAdicional').middleware('auth')
Route.put('/finalizar_pedido/:id', 'PedidosController.pagar').middleware('auth')
Route.post('/abrir', 'CaixasController.abrirCaixa').middleware('auth')
Route.get('/verifica_caixa', 'CaixasController.verificarCaixa').middleware('auth')
Route.put('/fechar/:id', 'CaixasController.fecharCaixa').middleware('auth')
Route.put('/reabrir/:id', 'CaixasController.reabrirCaixa').middleware('auth')
Route.put('/dar_baixa_receber/:id', 'ReceBersController.darBaixa').middleware('auth')
Route.put('/dar_baixa_pagar/:id', 'PagarController.darBaixa').middleware('auth')
Route.post('/redefinir', 'AuthController.redefinir').middleware('auth')

Route.post('/nova_empresa', 'EmpresasController.store')

Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout')
Route.post('/recuperar', 'AuthController.recuperar')
Route.get('/', async () => {
  return { hello: 'world' }
})