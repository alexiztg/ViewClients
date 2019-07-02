var ctrl = require('../controllers/catalogo')
var express = require('express')
var router = express.Router()

router.get('/usuarios/telefonicos', usuariostelefonicos)
router.get('/usuarios/domi', usuariosdomi)
router.get('/usuarios/adm', usuariosadm)
router.get('/usuarios/sist', usuariossist)
router.get('/usuarios/rh', usuariosrh)
router.get('/usuarios/limp',  usuarioslimp)
router.get('/obtener/usuario',  obtenerUsuario)
router.get('/sum/cli',  sumcli)
router.get('/sum/pro',  sumpro)
router.get('/sum/pos',  sumpos)
router.get('/test',  test)
router.get('/lista',  listaclientes)
router.get('/proyecto',  proyecto)
router.get('/contacto',  contacto)
router.post('/cambiar/cliente',  cambiarCliente)
router.post('/datos/grafica', datosgrafica)


function datosgrafica(req, res) {
  ctrl.datosgrafica()
  .then(function (result) {
    res.json(result)
  })
}


function contacto(req, res) {
  ctrl.contacto()
  .then(function (result) {
    res.json(result)
  })
}

function proyecto(req, res) {
  ctrl.proyecto()
  .then(function (result) {
    res.json(result)
  })
}

function direcciones(req, res) {
  ctrl.direcciones()
  .then(function (result) {
    res.json(result)
  })
}

function listaclientes(req, res) {
  ctrl.listaclientes()
  .then(function (result) {
    res.json(result)
  })
}

function usuariostelefonicos(req, res) {
  ctrl.usuariostelefonicos()
  .then(function (result) {
    res.json(result)
  })
}

function usuariosdomi(req, res) {
  ctrl.usuariosdomi()
  .then(function (result) {
    res.json(result)
  })
}

function usuariosadm(req, res) {
  ctrl.usuariosadm()
  .then(function (result) {
    res.json(result)
  })
}

function usuariossist(req, res) {
  ctrl.usuariossist()
  .then(function (result) {
    res.json(result)
  })
}

function usuariosrh(req, res) {
  ctrl.usuariosrh()
  .then(function (result) {
    res.json(result)
  })
}

function usuarioslimp(req, res) {
  ctrl.usuarioslimp()
  .then(function (result) {
    res.json(result)
  })
}

function sumcli(req, res) {
  ctrl.sumcli()
  .then(function (result) {
    res.json(result)
  })
}

function sumpro(req, res){
  ctrl.sumpro()
  .then(function (result) {
    res.json(result)
  })
}

function sumpos(req, res){
  ctrl.sumpos()
  .then(function (result) {
    res.json(result)
  })
}

function obtenerUsuario(req, res){
  ctrl.obtenerUsuario()
  .then(function (result) {
    res.json(result)
  })
}

function cambiarCliente(req, res){
  var d = req.body;
  ctrl.cambiarCliente(d)
  .then(function (result) {
    res.json(result)
  })
}

function test(req, res) {
  res.send('hola')
}

module.exports = router