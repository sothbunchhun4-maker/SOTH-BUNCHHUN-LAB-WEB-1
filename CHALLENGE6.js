function challenge6(vote){
 let countA=0;
 let countB=0;
 let countC=0;
 if(vote.length===0){
   return "There is not vote yet";
 }
 for(let i=0;i<vote.length;i++){
    if(vote[i]==='A'){
        countA++;
    }
    if(vote[i]==='B'){
        countB++;
    }
    if(vote[i]==='C'){
        countC++;
    }
 }
   if(countA>countB && countA>countC){
    return "A is the winner";
   }else if(countB>countA && countB>countC){
    return "B is the winner";
   }else if(countC>countA && countC>countB){
    return"C is the winner";
   }else if(countA===countB&&countA>countC){
    return "A and B are the  winner";
   }else if(countB===countC&&countB>countA){
    return"C and B are the  winner";
   }else if(countA===countC&&countA>countB){
    return "A and C  are the winner";
   }else{
    return "A ,B and C are the winner";
   }
}
console.log(challenge6(['A', 'B', 'A', 'C','A']));
console.log(challenge6(['A', 'B', 'B', 'C','A']));
console.log(challenge6([]));
console.log(challenge6(['A','B','C']))

