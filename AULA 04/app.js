//criar arquivo em nosso projeto
const fs=require('fs');

//criar um arquivo de log síncrono
let log = "mensagem de log\n";

//fs.writeFileSync('./logs.log',log);
fs.writeFileSync('./logs.log');

//criar arquivo d forma assíncrona
fs.writeFile('./logs2.log',log,{flag:"a+"},(erro)=>{
    if(erro){
        console.log(erro)
    }
})
console.log("fim");

//para excluirn arquivo
('./logs2.log');

console.log('Removido arquivo com método rmSync');

//outra forma de remover
fs.unlinkSync('./logs.log');
fs.unlinkSync('./logs2.log');
console.log('Removido arquivo usando unlinkSync');