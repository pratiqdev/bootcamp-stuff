const process = require('process');
if (process.argv.length > 2){
    console.log(process.argv[2] === process.argv[3]);
}else{
    console.log(false);
}