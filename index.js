



// 1-
function process(num) {
    if (num % 2 !== 0) {
        console.log( "even number ");
    }else{
        console.log("odd number "); 
        
    }
    
}
process(13);
process(8);





//2-
function getbigNumber(num1 , num2) {
   if ( typeof num1 !== 'number' || typeof num2 !== 'number' ) {
    console.log("please enter two number")
    
   }else{
     if (num1 > num2) {
        console.log("A bigger Number =" + num1)
    }else if (num2 > num1){ 
           console.log("A bigger Number =" + num2) 

    }else if (num1 = num2){
        console.log("The two number are equal")
    } 
   }
}
getbigNumber(15,10);
getbigNumber(3,50);
getbigNumber(10,10);
getbigNumber();



// 3-
function getage(year) {
    if (typeof year !== 'number') {
        console.log("enter number")
        
    }else{
        if (year > 2026) {
        console.log(" enter your real year ")
        
    }else{
     var age =(2026 - year)
        console.log("your age = " + age )

    }
    }
    
}
getage();
getage(1930);
getage(5000);


// 4-
function getOddNumber(x) {
    for (let i = 1; i < x; i++) {
        if( i % 2 != 0){
            console.log(i)
        }
    }
}
getOddNumber(10);



// 5-
function plusNumbers(num) {
    if (num == 0) {
        console.log("enter a bigger number zero")
        
    }else if(num < 0){
         console.log("enter number positive")
        
    }else{
         let plus = 0
         for (let i = 1; i < num; i++) {
           plus = plus + i
           console.log(plus);
            
         }
        
    }
}
plusNumbers(-100);
plusNumbers(0);
plusNumbers(4);


// اللهم انى اعوذ بك من علم لاينفع