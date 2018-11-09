const sql = require('mssql');

const config = require.main.require('./config/mssql');
let connection = new sql.connect(config, function(err){
    if(err){
        return console.log('Connection failed, bad config most likely. ', err);
    }
    sql.globalConnection = connection;
});


function findComputerName(options,cb){

    let names = [];
    let student = options.user;
    let global = sql.globalConnection; 
    let request = new sql.Request(global);

    request.query('SELECT TOP 15 ComputerName FROM UserLogon WHERE UserName = \''+student+'\'ORDER BY TimeStamp DESC', function(err, recordset){
        
        if (err) cb(err);

        if (recordset){
            for(let i=0;i<recordset['recordsets'][0].length;i++){
                names.push({computerName : recordset['recordsets'][0][i]['ComputerName']});
            }
            cb(null,names);
        } 
    });
}
module.exports = findComputerName;