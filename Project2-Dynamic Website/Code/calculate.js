// Addition Function
myAddition = (num1, num2) => {
    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value;
    math = parseInt(num1) + parseInt(num2);
    document.getElementById("sum").innerHTML = math;
}

// Subtraction Function
mySubtraction = (num1, num2) => {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var math = parseInt(num1) - parseInt(num2);
    document.getElementById("sum").innerHTML = math;
}

// multiplying Function
myMultiplying = (num1, num2) => {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var math = parseInt(num1) * parseInt(num2);
    document.getElementById("sum").innerHTML = math;
}

// Dividing Function
myDividing = (num1, num2) => {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var math = parseInt(num1) / parseInt(num2);
    document.getElementById("sum").innerHTML = math;
}

// my Power Function
myPower = (num1, num2) => {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    document.getElementById("sum").innerHTML = Math.pow(num1, num2);
}

// Factorial Function
myFactorial = () => {
    factorial = (n) => {
        document.getElementById("input2").disabled = true; //Input tow off 
        document.getElementById("input2").style.backgroundColor = '#5e6472';
        document.getElementById("input2").value = "";
        //base case
        if (n == 0 || n == 1) {
            return 1;
            //recursive case
        } else {
            return n * factorial(n - 1);
        }
    }
    let n = document.getElementById("input1").value;
    answer = factorial(n)
    document.getElementById("sum").innerHTML = answer;
}

// Absolute Value Function
myAbsoluteValue = (num1) => {
    document.getElementById("input2").disabled = true; //Input tow off 
    document.getElementById("input2").value = "";
    document.getElementById("input2").style.backgroundColor = '#5e6472';
    var num1 = document.getElementById("input1").value;
    var math = Math.abs(num1);
    document.getElementById("sum").innerHTML = math;
}

// Clear Function 
clearButton = () => {
    document.getElementById("input2").disabled = false; //Input tow on 
    document.getElementById("input2").style.backgroundColor = '#aed9e0';
    document.getElementById("sum").innerHTML = "=";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}


//Footer Style
//BackGround Color
backGroundColor = () => {
    document.getElementById('colorOne').onclick = function () {
        document.getElementById("container").style.backgroundColor = "#99c1de";
    };
    document.getElementById('colorTwo').onclick = function () {
        document.getElementById("container").style.backgroundColor = "#c5dedd";
    };
    document.getElementById('colorThree').onclick = function () {
        document.getElementById("container").style.backgroundColor = "#fad2e1";
    };
    document.getElementById('colorFour').onclick = function () {
        document.getElementById("container").style.backgroundColor = "#eddcd2";
    };
}
//Font Size
Size = () => {
    document.getElementById('sizeOne').onclick = function () {
        document.getElementById("container").style.fontSize = "x-large";
    };
    document.getElementById('sizeTwo').onclick = function () {
        document.getElementById("container").style.fontSize = "large";
    };
    document.getElementById('sizeThree').onclick = function () {
        document.getElementById("container").style.fontSize = "medium";
    };
    document.getElementById('sizeFour').onclick = function () {
        document.getElementById("container").style.fontSize = "x-small";
    };
}
//Font Family
fontFamily = () => {
    document.getElementById('fontOne').onclick = function () {
        document.getElementById("body").style.fontFamily = "times";
    };
    document.getElementById('fontTwo').onclick = function () {
        document.getElementById("body").style.fontFamily = "Impact,Charcoal,sans-serif";
    };

}
        //End Footer Style
