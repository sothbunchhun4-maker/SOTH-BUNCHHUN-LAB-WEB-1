function challenge5(text){
    let count=0;
    let word=false
     for(let i=0;i<text.length;i++){
        if(text[i]!=" "){
            if(!word)
             count++;
            word=true;
        }else{
            word=false; 
        }
    }
    return count;
}
console.log(challenge5("hello world"))