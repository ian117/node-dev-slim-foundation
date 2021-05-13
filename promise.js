let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Done");
    },3000)
});

// console.log("Console log 1", promise)
promise.then((value)=>{console.log('se ha resuelto MIRA: ' +value)})
// setTimeout(()=>{
//     console.log("Console log 2", promise)
// },4000)