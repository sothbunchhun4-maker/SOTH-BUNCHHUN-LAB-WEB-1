function challenge3(array){
    let sum=0;
    let count=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
        count++;
    }
    let avr=sum/count;
    return  avr;
}
console.log(challenge3([85,90,78,92]));
console.log(challenge3([10,20,30]));
console.log(challenge3([]));