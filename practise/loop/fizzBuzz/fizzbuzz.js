/*
Write a program that allows the user to enter a number, 
print each number between one and the number the user entered, 
but for numbers that divide by 3 without a remainder print Fizz instead. 
For numbers that divide by 5 without a remainder print Buzz and finally 
for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.
*/ 

/*
    solution:
    1. first let the user to enter the number 
    2.now loop the number from upto the number that user eneterd.
    3.pass the condition where if the number is divisible by 3 and 5 then return or print "FizzBuzz"
    3. if th number is diviisble by 3 then  print "Fizz"
    4. if the number is divisible by 5 then print "Buzz"
    5. else print that number
*/ 

let fizzBuzz = (n) => {
    // loop number from 1 to n
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }else if (i % 3 == 0){
            console.log("Fizz");
        }else if (i % 5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }

}
fizzBuzz(100);