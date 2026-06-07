function fetchData(accept = true){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(accept){
                resolve(`Api call was ${accept}`);
            }else{
                reject(`chal bsd`);
            }
        },3000)
    })
}

fetchData()
    .then((data)=>{
        console.log(data);
        return data.toLowerCase();
    })
    .then((d)=>{
        console.log(d);
    })
    .catch((error)=>{
        console.log(error)
    })