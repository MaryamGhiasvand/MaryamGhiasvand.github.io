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


//---------- question1:

String.prototype.filter = function (char) { 
    var str = ""
    var wordsArr = this.split(' ');
    for (i = 0; i < wordsArr.length; i++) { if(wordsArr[i] != char){
    str+= " "+wordsArr[i] }

}
console.log("--------- after filter --------------");
console.log(str)
}


function testQuestion1() {
    console.log("--------- original text --------------")
    console.log("This house is not nice!");
    var word ="This house is not nice!".filter('not')
    //console.log("This house is not nice!".filter('not'));
    
    // console.log("--------- after filter --------------")
    // console.log(str) };
};


//------------- question2:
let bubbleSort = (inputArr) => {
    let len = inputArr.length; for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
    if (inputArr[j] > inputArr[j + 1]) {
    let tmp = inputArr[j]; inputArr[j] = inputArr[j + 1]; inputArr[j + 1] = tmp;
    } }
    }
    return inputArr; };

    function testQuestion2() {
        console.log("--------- original numbers --------------")
        console.log("1, 8, 4,3,9,10");
        const nums=[1, 8, 4,3,9,10];
       console.log(bubbleSort(nums));
        // console.log("--------- after filter --------------")
        // console.log(str) };
    };
//------------ question3:
function Person(name, age) {
    this.name = name;
    this.age = age; 
    };

function Teacher(name, age) { 
    Person.call(this, name, age, "M");
    //this.subject = subject; 
    
};
Teacher.prototype.teach = function(subject) { 
    this.subject = subject;
    console.log(this.name + ' is now teaching ' +subject ) 
};
    //Teacher.prototype = Object.create(Person.prototype);

function testQuestion3() {
    var teacher1 = new Teacher("Maryam Ghiasvand","30");
    teacher1.teach("Math");
}


//-------------question4:

Person.prototype.greeting = function() {
    console.log('Greetings, my name is '+this.name +' and I am '+this.age+' years old.') };
Person.prototype.salute = function() {
    console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!')};
    

function Student(name, age,major) { 
    Person.call(this, name, age);
    this.major = major; }
Student.prototype.greeting = function() {
        console.log('Hey, my name is '+this.name +' and I am studying '+this.major ) };


function Professor(name, age, department) { 
    Person.call(this, name, age); 
    this.department = department;
    }
Professor.prototype.greeting = function() {
    console.log('Good day, my name is' + this.name + ' and I am in the '+this.department + ' department.')
    };

    function testQuestion4() {
        var professor1 = new Professor("Maryam Ghiasvand","30","MathDept");
        var student1=new Student("Jimmy", "30","Math")
        professor1.greeting();
       // professor1.salute();
        student1.greeting();
      //  student1.salute();
    }