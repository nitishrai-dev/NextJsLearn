// function fetchUserData(){
//     return new Promise((accept,reject)=>{
//         setTimeout(()=>{
//             let propse = true
//             if(propse){
//                 accept(`accepted`)
//             }else{
//                 reject(`rejected`);
//             }
//         },3000)
//     })
// }

// fetchUserData()
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     }) 

// way of promises to mutate asyncronouse js


// Now async await a mostly used way
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>[
            reject({name:"nitish",url:"http://raisahab.com"})
        ],3000);
    })
}

// fetchData()
//     .then()
//     .catch()

async function getUserData(){
    try{
        console.log("fetching user Data.........");
        const userData = await fetchData();
        console.log(`user data `, userData);
    }catch(error){
        console.log(`error reported was`, error);
    }
}
getUserData();
console.log(`after all`)