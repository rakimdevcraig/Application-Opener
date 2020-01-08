const { exec } = require('child_process');

class OpenProgram{


    log(){
        console.log('text')
    }
    //path will be the word 'open' and the path to an app so if you want to open safari path will be
    //'openProgram('open /Applications/Safari.app')' 
    openMacProgram(path){
        exec(path, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
          });
    }
}

module.exports = OpenProgram;
