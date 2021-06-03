const sometimesWillHappen =  () =>{
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve('Hey!');
        }else{
            reject('Whoops!');
        }
    });
};


sometimesWillHappen()
    .then(response=> console.log(response))
    .catch(err =>console.error(err));


