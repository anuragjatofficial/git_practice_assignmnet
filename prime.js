let num = 13;
let factor = 0;
for(let i =0;i<=num;i++){
    if(num%i==0){
        factor++;
    }
}
(factor == 2) ? console.log(num , "is prime") : console.log(num, "not prime");
// conflict resolved 
// member 2 code is better 
