const findComputer = require('./index.js');

    let studentID = '96011';  

    let options = {
        database:'\\\\tolkien\\software$\\UserLogon\\Students\\CarlBen\\logins.sqlite',
            user:studentID
        };
    findComputer(options,function(err,computers){
        for(let i = 0;i<computers.length;i++){
            if(computers[i].computerName.includes('-X-')){
                 let computer = computers[i].computerName;
                user.computer = computer;
                res.send(user);
                 break;
            }
        }
    });
