
numbers = document.getElementById('numbers');
nums = document.getElementsByClassName("num");
output = document.getElementsByClassName("out");

for(var i = 1; i<= 17; i++) {
    numbers.innerHTML += "<div class='num' id='" + i + "'></div>";
    console.log("h");
}

for(var i = 0; i<= 16; i++) {
    if(i < 10) {
        nums[i].innerText += i;
    }

    if(i == 10) {
        nums[i].innerText += "C";
    }

    if(i == 11) {
        nums[i].innerText += "=";
    }
    if(i == 12) {
        nums[i].innerText += "+";
    }

    if(i == 13) {
        nums[i].innerText += "-";
    }
    if(i == 14) {
        nums[i].innerText += "*";
    }
    if(i == 15) {
        nums[i].innerText += "/";
    }
    if(i == 16) {
        nums[i].innerText += ".";
    }
    
    
    nums[i].addEventListener('click', button_click);
}


var active = true;

function button_click() {
    console.log(this.innerText);
    
    switch(this.innerText) {
        case "C":
            output[0].innerText = " ";
            break;

        case "+":
            if(active == false) {
                output[0].innerText = eval(output[0].innerText);
                output[0].innerText += "+";
                active = true;
            }
            break;

        case "-":
            if(active == false) {
                output[0].innerText = eval(output[0].innerText);
                output[0].innerText += "-";
                active = true;
            }
            break;

        case "*":
            if(active == false) {
                output[0].innerText = eval(output[0].innerText);
                output[0].innerText += "*";
                active = true;
            }
            break;

        case "/":
            if(active == false) {
                output[0].innerText = eval(output[0].innerText);
                output[0].innerText += "/";
                active = true;
            }
            break;

        case ".":
            if(active == false) {
                output[0].innerText += ".";
                active = true;
            }
            break;

        case "=":
            console.log(this.innerText);
            output[0].innerText = eval(output[0].innerText);
            break;

        default:
            output[0].innerText += eval(this.innerText);
            active = false;
            
    }
}

