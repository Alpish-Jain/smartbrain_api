const fs=require('fs');
fs.readFile('./hello.txt',(err,data)=>{
    console.time('funny');
    if(err){
        console.log("errorrrrr")
    }
    const finaldata=data.toString();
    const array=finaldata.split('');
    let counter=0;
    for(let i=0;i<array.length;i++){
        if(array[i]==='('){
            counter=counter+1;}
        else if(array[i]==')'){
            counter=counter-1;
        }
    }
    console.log(counter);
    console.timeEnd('funny');
    });
    
