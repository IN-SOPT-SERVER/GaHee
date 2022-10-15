const condition: boolean = true;

//최초 생성 시점
const promise = new Promise((resolve,reject)=>{
    if (condition){
        //string을 보내줌 
        resolve("우와 promise다!");
    }else{
        reject(new Error("비동기 처리 도중 실패! "));
    }
});

// 비동기 처리 성공(then), 비동기 처리 실패(catch)
//데이터를 resoleveData로 받음 
promise.then((resolveData):void => console.log(resolveData))
        .catch((error):void=>console.log(error));