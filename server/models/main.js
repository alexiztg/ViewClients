Promise = require('bluebird');
helpers = require('../modules/helpers');

conn = null;
conn_bahia = null;


sql = require('mssql');

var fs = require('fs');
var sql_cred = JSON.parse(fs.readFileSync(__dirname + '/sql_cred', 'utf8'));
var sql_cred_bahia = JSON.parse(fs.readFileSync(__dirname + '/sql_cred_bahia', 'utf8'));


module.exports.start = function() {
   return new Promise(function(resolve, reject) {
    var p1 = new Promise(function(resolve, reject) {
      conn = new sql.Connection(sql_cred, function(err) {
        if(err) {
          reject(err);
        } else {
          resolve({conn: conn});
          console.log('mssql');
        }
      });
    });
    var p2 = new Promise(function(resolve, reject) {
      conn_bahia = new sql.Connection(sql_cred_bahia, function(err) {
        if(err) {
          reject(err);
        } else {
          resolve({conn_bahia: conn_bahia});
          console.log('mssql------->bahia');
        }
      });
    });

    Promise.settle([p1,p2]).then(function(results) {
      resolve({conn: conn});
    });
   });
}
