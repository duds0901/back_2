//criar pastas 
const fs = require('fs');

//com método síncrono
fs.mkdirSync('logs');

//com método assíncrono
fs.mkdir('./logs2',(erro)=>{
    if (erro){
        console.log('Erro!!')
    }
}) 
    
//para deletar as pastas 
if(fs.existsSync('./log2')){
    fs.rmdirSync('./log2');
}
console.log('fim da execução')