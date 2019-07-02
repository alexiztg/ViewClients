require('../services/catalogo');
var Chart = require('chart.js')
Chart.defaults.global.legend.display = false;

angular.module(MODULE_NAME)
.controller('catalogoCtrl', ['$scope', 'catalogoService', function($scope, catalogoService) {
    $scope.init = init
    $scope.mostrar= true
    $scope.cambiarCliente = cambiarCliente

    $scope.list = [
        { nombre: 'Direccion 1' },
        { nombre: 'Direccion 2' },
        { nombre: 'Direccion 3' },
        { nombre: 'Direccion 4' },
        { nombre: 'Direccion 5' }
    ]


    $scope.datos = {
        nombre: '',
        ap: '',
        edad: '',
        correo: '',
        telefono: '',
        activo: ''
    }

    function init() {
        btObtner ()
        sumcli()
        sumpos()
        sumpro()    
        usuariostelefonicos()    
        usuariosdomi()
        usuariosadm()
        usuariossist()
        usuariosrh()
        usuarioslimp()
        listaclientes()
        datosgrafica()
        proyecto()
        contacto()
    }

    function usuariostelefonicos(){
        catalogoService.usuariostelefonicos()
        .success(function(res){
            $scope.datos_telefonicos = res.result[0] 
            console.log($scope.datos_telefonicos,'<<< DATOS TELEFONICO')
        })
    }


    function usuariosdomi(){
        catalogoService.usuariosdomi()
        .success(function(res){
            $scope.datos_domiciliaria = res.result[0] 
            console.log(res)
        })
    }

    function datosgrafica(){
        catalogoService.datosgrafica()
        .success(function(res){
            console.log(res,'DATOS TELEFONICO')
            $scope.datosgrafica = res.result[0] 
            dibujarPie(res.result)
        })
    }

    function contacto(){
        catalogoService.contacto()
        .success(function(res){
            $scope.contacto = res.result 
            console.log(res)
        })
    }

    function direcciones(){
        catalogoService.direcciones()
        .success(function(res){
            $scope.direcciones = res.result 
            console.log(res)
        })
    }

    function listaclientes(){
        catalogoService.listaclientes()
        .success(function(res){
            $scope.lista_clientes = res.result 
            console.log(res)
        })
    }

    function btObtner(){
        catalogoService.obtenerUsuario()
        .success(function(res){
            console.log(res,'<-- OBTENER USUARIO')
            $scope.datos_list = res.result 
        })
    }
    

    function usuariosadm(){
        catalogoService.usuariosadm()
        .success(function(res){
            $scope.datos_admin = res.result[0] 
            console.log(res)
        })
    }

    function usuariossist(){
        catalogoService.usuariossist()
        .success(function(res){
            $scope.datos_sistemas = res.result[0] 
            console.log(res)
        })
    }

    function usuariosrh(){
        catalogoService.usuariosrh()
        .success(function(res){
            $scope.datos_rh = res.result[0] 
            console.log(res)
        })
    }

    function usuarioslimp(){
        catalogoService.usuarioslimp()
        .success(function(res){
            $scope.datos_limpieza = res.result[0] 
            console.log(res)
        })
    }
    
    function sumcli(){
        catalogoService.sumcli()
        .success(function(res){
            console.log(res, 'sumcli')
            $scope.datos_list = res.result[0] 
        })
    }

    function sumpro(){
        catalogoService.sumpro()
        .success(function(res){
            console.log(res, 'sumpro')
            $scope.datos_list1 = res.result[0] 
        })
    }

    function sumpos(){
        catalogoService.sumpos()
        .success(function(res){
            console.log(res, 'sumpos')
            $scope.datos_list2 = res.result[0] 
        })
    }

    function dibujarPie(d) {
        var data = []
        var labels = []
        var tipo = ''

        for (var key in d) {
            labels.push(d[key].CLIENTE_PROYECTO_NUEVO)
            data.push(d[key].total)
        }

        console.log(data,'<-DATA')
        console.log(labels,'<-LABELS')

        tipo = d.length > 5 ? 'horizontalBar' : 'pie'

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: tipo,
            data: {
                datasets: [{
                    data: data,
                    backgroundColor:["#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C","#F7564A","#46BFBD","#FDB45C"]
                }],
                labels: labels
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {}
            }
        });
    }


    function proyecto(){
        catalogoService.proyecto()
        .success(function(res){
            $scope.proyecto = res.result[0]
            console.log(res, $scope.proyecto,'<----datos proyecto')
        })
    }


    function proyecto(){
        var d = { cliente_id: $scope.cliente_id }
        catalogoService.proyecto(d)
        .success(function(res){

            res.result.forEach(function(item, index){
                item.nombre = 'Dirección ' + (parseInt(index) + parseInt(1))
            })

            $scope.listDirecciones = res.result
        })
    }

    function cambiarCliente() {
        var d = { cliente_id: $scope.cliente_id }
        catalogoService.cambiarCliente(d)
        .success(function(res){

            console.log(res,'<------------ RESU')

            res[0].result.forEach(function(item, index){
                item.nombre = 'Dirección ' + (parseInt(index) + parseInt(1))
            })

            $scope.listDirecciones = res[0].result
            $scope.listProyectos = res[1].result
            $scope.listContac = res[2].result
            
        })
    }

}]);
