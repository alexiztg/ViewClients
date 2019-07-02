module.exports = {
    obtenerUsuario:obtenerUsuario,
    usuariostelefonicos:usuariostelefonicos,
    usuariosdomi:usuariosdomi,
    usuariosadm:usuariosadm,
    usuariossist:usuariossist,
    usuariosrh:usuariosrh,
    usuarioslimp:usuarioslimp,
    listaclientes:listaclientes,
    clienteProyecto:clienteProyecto,
    clienteContacto:clienteContacto,
    datosgrafica:datosgrafica,
    sumcli:sumcli,
    sumpro:sumpro,
    sumpos:sumpos,
    cambiarCliente:cambiarCliente
}


function usuariostelefonicos() {
  var query = `
  select 
    count(*) as telefonicos
  from 
    BAHIA.dbo.VW_PADRONLIGTH 
  WHERE 
    DESCRIPCION_AREA='TELEFONICA' 
  and estatus='ACTIVO'
    `
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn_bahia, query, inputs, {})
}

function usuariosdomi() {
  var query = `
  select 
    count(*) as domiciliaria
  from 
    BAHIA.dbo.VW_PADRONLIGTH 
  WHERE 
    DESCRIPCION_AREA='DOMICILIARIA' 
  and estatus='ACTIVO'
              `
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn_bahia, query, inputs, {})
}

function datosgrafica() {
  var query = `
  SELECT  
        CLIENTE_PROYECTO_NUEVO, count(CLIENTE_PROYECTO_NUEVO) as total
  FROM 
        BAHIA.dbo.VW_PADRONLIGTH
  WHERE  
        estatus='ACTIVO' 
  GROUP by 
        CLIENTE_PROYECTO_NUEVO
  HAVING 
        CLIENTE_PROYECTO_NUEVO is not NULL
    `
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn, query, inputs, {})
}

function listaclientes() {
  var query = `
  select DISTINCT(nombre), cliente_id
  from cliente
  where activo=1
    `
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn, query, inputs, {})
}

function cambiarCliente(d) {
  var query = `
  select 
        c.cliente_id,
        d.calle as calledir,
        d.numero as numerodir,
        c.fecha_alta,
        c.nombre as nombredir,
        c.usuario_id as usuario_alta,
        c.razon_social,
        c.nota
  from 
        clientes..direccion  as d
  inner join 
        clientes..cliente as c
  on 
        d.cliente_id = c.cliente_id
  WHERE
        c.activo=1 
  and 
        c.cliente_id=@cliente_id
    `
  var inputs = [ 
    { nombre: 'cliente_id', tipo: sql.Int }
  ]
  return helpers.mssqlQuery('GET', conn, query, inputs, d)
}

function clienteProyecto(d) {
  var query = `
    SELECT
      c.fecha_alta as fecha, 
      c.nombre as empresa,
      p.nombre as proyecto,
      p.volumen as volumen,
      p.posiciones_solicitadas as posi
    FROM
      clientes..proyecto as p
    INNER JOIN
      clientes..cliente as c
    ON 
      p.cliente_id=c.cliente_id
    WHERE
      c.activo=1
    AND	
      c.cliente_id=@cliente_id
    `
    var inputs = [ 
      { nombre: 'cliente_id', tipo: sql.Int }
    ]

  return helpers.mssqlQuery('GET', conn, query, inputs, d)
}


function clienteContacto(d) {
  var query = `
      select 
          c.cliente_id,c.nombre as cliente  
          ,p.proyecto_id,p.nombre as proyecto
          ,pc.proyecto_contacto_id 
          ,cont.nombre
        from
            cliente  as c
        left join 
            proyecto as p
        on  
            c.cliente_id=p.cliente_id
        left join 
            proyecto_contacto as pc
        on  
            p.proyecto_id=pc.proyecto_id
        left join 
            contacto as cont
        on 
            pc.contacto_id=cont.contacto_id
        WHERE
            c.cliente_id= @cliente_id
        and 
            c.activo=1 
    `
    var inputs = [ 
      { nombre: 'cliente_id', tipo: sql.Int }
    ]

  return helpers.mssqlQuery('GET', conn, query, inputs, d)
}

function usuariosadm() {
  var query = `
  select 
    count(*) as admin
  from 
    BAHIA.dbo.VW_PADRONLIGTH 
  WHERE 
    DESCRIPCION_DIVISION='ADMINISTRACION' 
  and 
    estatus='ACTIVO'
              `
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn_bahia, query, inputs, {})
}

function usuariossist() {
  var query = `
  select 
    count(*) as sistemas
  from 
    BAHIA.dbo.VW_PADRONLIGTH 
  WHERE 
    DESCRIPCION_AREA='DESARROLLO' 
  and 
    estatus='ACTIVO'
              `
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn_bahia, query, inputs, {})
}

function usuariosrh() {
  var query = `
  select 
    count(*) as rh
  from 
    BAHIA.dbo.VW_PADRONLIGTH 
  WHERE 
    DESCRIPCION_AREA='RECLUTAMIENTO Y SELECCION' 
  and 
    estatus='ACTIVO'
              `
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn_bahia, query, inputs, {})
}

function usuarioslimp() {
  var query = `
  select 
    count(*) as limpieza
  from 
    BAHIA.dbo.VW_PADRONLIGTH 
  WHERE 
    DESCRIPCION_AREA='MANTENIMIENTO Y LIMPIEZA' 
  and 
    estatus='ACTIVO' `
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn_bahia, query, inputs, {})
}

function sumcli() {
  var query=`
  select 
    count (*) as totalcli
  from 
    cliente  
  ` 
  var inputs=[]
  return helpers.mssqlQuery('GET', conn, query, inputs, {})
}
  
function sumpro() {
  var query=`
  select 
    count (*) as totalpro
  from 
    proyecto 
  ` 
  var inputs=[]
  return helpers.mssqlQuery('GET', conn, query, inputs, {})
}

function sumpos() {
  var query=`
  SELECT 
      SUM (posiciones_solicitadas) as totalpos
  from 
      proyecto
  ` 
  var inputs=[]
  return helpers.mssqlQuery('GET', conn, query, inputs, {})
}

function obtenerUsuario() {
  var query=`
  SELECT 
      SUM (posiciones_solicitadas) as totalpos
  from 
      proyecto
  ` 
  var inputs=[]
  return helpers.mssqlQuery('GET', conn, query, inputs, {})
}
