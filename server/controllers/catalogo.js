var model=require('../models/catalogo')
module.exports={
    obtenerUsuario:obtenerUsuario,
    usuariostelefonicos:usuariostelefonicos,
    usuariosdomi:usuariosdomi,
    usuariosadm:usuariosadm,
    usuariossist:usuariossist,
    usuariosrh:usuariosrh,
    usuarioslimp:usuarioslimp,
    listaclientes:listaclientes,
    proyecto:proyecto,
    contacto:contacto,
    sumcli:sumcli, 
    sumpro:sumpro,
    sumpos:sumpos,
    cambiarCliente:cambiarCliente,
    datosgrafica:datosgrafica
}

function datosgrafica (){
    return new Promise(function(resolve, reject){
        model.datosgrafica()
        .then(function(res){
            resolve(res)
        })
    })
}

function direcciones (){
    return new Promise(function(resolve, reject){
        model.direcciones()
        .then(function(res){
            resolve(res)
        })
    })
}

function proyecto (){
    return new Promise(function(resolve, reject){
        model.proyecto()
        .then(function(res){
            resolve(res)
        })
    })
}

function contacto (){
    return new Promise(function(resolve, reject){
        model.contacto()
        .then(function(res){
            resolve(res)
        })
    })
}

function usuariostelefonicos (){
    return new Promise(function(resolve, reject){
        model.usuariostelefonicos()
        .then(function(res){
            resolve(res)
        })
    })
}

function usuariosdomi (){
    return new Promise(function(resolve, reject){
        model.usuariosdomi()
        .then(function(res){
            resolve(res)
        })
    })
}

function usuariosadm (){
    return new Promise(function(resolve, reject){
        model.usuariosadm()
        .then(function(res){
            resolve(res)
        })
    })
}


function listaclientes (){
    return new Promise(function(resolve, reject){
        model.listaclientes()
        .then(function(res){
            resolve(res)
        })
    })
}

function usuariossist (){
    return new Promise(function(resolve, reject){
        model.usuariossist()
        .then(function(res){
            resolve(res)
        })
    })
}

function usuariosrh (){
    return new Promise(function(resolve, reject){
        model.usuariosrh()
        .then(function(res){
            resolve(res)
        })
    })
}


function usuarioslimp (){
    return new Promise(function(resolve, reject){
        model.usuarioslimp()
        .then(function(res){
            resolve(res)
        })
    })
}

function obtenerUsuario (){
    return new Promise(function(resolve, reject){
        model.obtenerUsuario()
        .then(function(res){
            resolve(res)
        })
    })
}

function sumcli (){
    return new Promise(function(resolve,reject){
        model.sumcli()
        .then(function(res){
            resolve(res)
        })
    })
}

function sumpro (){
    return new Promise(function(resolve,reject){
        model.sumpro()
        .then(function (res) {
            resolve(res)
        })
    })
}

function sumpos (){
    return new Promise(function(resolve,reject){
        model.sumpos()
        .then(function (res) {
            resolve(res)
        })
    })
}

function cambiarCliente (d){
    return new Promise(function(resolve,reject){

        var p1 = model.cambiarCliente(d)
        var p2 = model.clienteProyecto(d)
        var p3 = model.clienteContacto(d)

        var inputs = [p1, p2, p3]

        Promise.all(inputs)
        .then(function(res){
            resolve(res)
        })

    })
}