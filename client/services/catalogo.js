var urlusuario = helpers.getUrl();

angular.module(MODULE_NAME)
.service('catalogoService', ['$http', function($http) {

  var urlBase = urlusuario + '/catalogo';

  this.obtenerUsuario = function () {
    console.log('SERVICIO');
    return $http.get(urlBase + "/obtener/usuario");
  };

  this.sumcli = function () {
    return $http.get(urlBase + "/sum/cli");
  };

  this.sumpro = function () {
    return $http.get(urlBase + "/sum/pro");
  };

  this.sumpos = function () {
    return $http.get(urlBase + "/sum/pos");
  };

  this.usuariostelefonicos = function () {
    return $http.get(urlBase + "/usuarios/telefonicos");
  };

  this.proyecto = function () {
    return $http.get(urlBase + "/proyecto");
  };
  
  this.contacto = function () {
    return $http.get(urlBase + "/contacto");
  };

  this.listaclientes = function () {
    return $http.get(urlBase + "/lista");
  };

  this.usuariosdomi = function () {
    return $http.get(urlBase + "/usuarios/domi");
  };
  
  this.usuariosadm = function () {
    return $http.get(urlBase + "/usuarios/adm"); 
  };

  this.usuariossist = function () {
    return $http.get(urlBase + "/usuarios/sist");
  };

  this.usuariosrh = function () {
    return $http.get(urlBase + "/usuarios/rh");
  };

  this.usuarioslimp = function () {
    return $http.get(urlBase + "/usuarios/limp");
  };

  this.cambiarCliente = function (d) {
    return $http.post(urlBase + "/cambiar/cliente", d);
  };

  this.datosgrafica = function (d) {
    return $http.post(urlBase + "/datos/grafica", d);
  };


}]);
