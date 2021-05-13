const fs = require('fs');

fs.writeFile('mensajeTexto.txt', "Escribo esto cause iam Pro\nEscribo esto cause iam Pro\n",()=>{
    console.log("Saved!")
});

console.log("Se mandó la func WriteFile Async")

fs.readFile("mensajeTexto.txt",(err, content)=>{
    console.log(content)
})

fs.readFile("mensajeTexto.txt",{encoding:'utf-8'},(err, content)=>{
    console.log(content)
})