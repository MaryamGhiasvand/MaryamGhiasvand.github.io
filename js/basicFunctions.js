var rudyTimer = (function(){
timer = null; // stores ID of interval timer
function delayMsg() {
    if (timer === null) {
        timer = setInterval(rudy, 1000);
    } else { 
        clearInterval(timer); timer = null;
    } 
}

function rudy() { // called each time the timer goes off
    document.getElementById("output").innerHTML += " Rudy!";
}
return delayMsg;
}()
);


//---------- question1:Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.


function max(a,b) {
    console.log("*********** Question1***********")
    var max=0;
    if(a>b) { max = a}
    else {max = b}
    console.log(" max of " + a +" and "+ b +" is :" + max)
};


//------------- question2:
function maxOfThree(a,b,c) {
    console.log("*********** Question2***********")
    var max=0;
    if(a>b && a>c)  { max = a}
    else if(b>a && b>c) { max = b}
    else if(c>a && c>b) { max = c}
    console.log(" max of " + a +" and "+ b +" and "+ c +" is :" + max)
};
//------------ question3:
//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(letter) {
    console.log("*********** Question3***********")
    var res = false;
    if(letter==="a" || letter==="i"|| letter==="o"|| letter==="u"|| letter==="e")  { res =true}
    console.log(" isvowel of "+letter+" is :"  + res)
};


//-------------question4:

function calculate() {
    console.log("*********** Question4***********")
    var inputArr= [1,2,3,4]
    console.log("input array = " + inputArr)
    console.log("sum = "+sum(inputArr)+" and multiple = "  + multiply(inputArr));
};
function sum(inputArr) {
    var sum =0;
    for (i = 0; i < inputArr.length; i++) {
        sum += inputArr[i];
      }
      return sum;
};
function multiply(inputArr) {
    var multiple =1;
    for (i = 0; i < inputArr.length; i++) {
        multiple *= inputArr[i];
    }
      return multiple;
};

//-------------question5:

function reverse(inputStr) {
    console.log("*********** Question5***********")
    console.log("input string is : " + inputStr)
    var reverseStr="";
    for (i = inputStr.length-1; i >=0; i--) {
        reverseStr += inputStr[i];
    }
    console.log("reverse string is : "  + reverseStr);
};

//-------------question6:

function findLongestWord() {
    console.log("*********** Question6***********")
    var inputArr =["Maryam","Jim","lucas","Bob","Sara"]
    console.log("input words are : " + inputArr)
    var maxLength =0;
    for (i = 0; i < inputArr.length; i++) {
        if(inputArr[i].length > maxLength){
            maxLength= inputArr[i].length;
        } 
    }
    console.log("the max length is : "  + maxLength);
};
//-------------question7:

function filterLongWords(inputArr,i) {
    console.log("*********** Question7***********")
    console.log("input words are : " + inputArr)
    var returnArr =[];
    for (index = 0; index < inputArr.length; index++) {
        if(inputArr[index].length > i){
            returnArr.push(inputArr[index])
        } 
    }
    console.log("the words longer than "+i +" are : "  + returnArr);
};