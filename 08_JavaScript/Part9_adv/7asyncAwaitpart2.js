function fetchPostData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({title:`raisahab`,post:`best developer in the world`});
        },2000)
    });
}

function fetchCommentData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Love youe chai and code");
        },3000)
    });
}

async function postData(){
    try{
        console.log(`fetching data..`);
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(`user data comment data`, postData," ", commentData);
    }catch(error){
        console.log(`Error caught`,error);
    }
}

postData();

// cosnt[function1, function2] = await Promise.all([function1(), function2()])

// better way to fetch multiple data in single async await method 