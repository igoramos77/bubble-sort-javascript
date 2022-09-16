
var nums = [];

var selected = 0;

for (i = 0; i < nums.length; i++) {
  if (i == selected) {
    document.getElementById("array").innerHTML +=
      "<div class='bubble'><div class='num'>" +
      nums[i] +
      "</div><div class='num'>" +
      nums[i + 1] +
      "</div>";
  } else if (i == selected + 1) {
    document.getElementById("array").innerHTML += "";
  } else {
    document.getElementById("array").innerHTML +=
      "<div class='num'>" + nums[i] + "</div>";
  }
}

var counter = 0;
var numberOfPasses = 2;

function Swipe() {
  
  if (counter > nums.length - numberOfPasses) {
    counter = 0;
    numberOfPasses++;
  }

  if (nums[counter] > nums[counter + 1]) {
    var temp = nums[counter];
    nums[counter] = nums[counter + 1];
    nums[counter + 1] = temp;
    document.getElementById("array").innerHTML += "<style>.bubble .num:nth-child(1) { animation: numLeft 1s ease; } .bubble .num:nth-child(2) { animation: numLeft 1s ease; } .bubble { animation: numRight 1s ease; }</style>";
  }

  setTimeout(function () {
    document.getElementById("array").innerHTML = "";
    if (counter > nums.length - numberOfPasses) {
      counter = 0;
      numberOfPasses++;
    }
    for (i = 0; i < nums.length; i++) {
      if (i == counter) {
        document.getElementById("array").innerHTML += "<div class='bubble'><div class='num'>" + nums[i] + "</div><div class='num'>" + nums[i + 1] + "</div>";
      } else if (i == counter + 1) {
        document.getElementById("array").innerHTML += "";
      } else {
        document.getElementById("array").innerHTML +=
          "<div class='num'>" + nums[i] + "</div>";
      }
    }
  }, 1000);
  counter++;
}


/* SECTION 1  */

const inputs = document.querySelectorAll('.passcode-area input');
inputs[0].focus();
for (elem of inputs) {
  elem.addEventListener('input', function() {
    const value = this.value;
    const nextElement = this.nextElementSibling;
    if (value === '' || !nextElement) {
      return;
    }
    nextElement.focus();
  });
}
for (let [i, elem] of inputs.entries()) {
  elem.addEventListener('keydown', function(event) {

    if ((i + 1) === 9) {
      result();
    }

    console.log(event.key)

    nums.push(event.key);

    console.log(nums)

    const numbers = document.querySelectorAll('.num');

    console.log(numbers)

    numbers[i].innerText = event.key;

     //Right Arrow Key
    if (event.keyCode == 39) {
      this.nextElementSibling.focus();
    }
     //Left Arrow Key
    //Add Highlight
    if (event.keyCode == 37) {
      this.previousElementSibling.focus();
    }
    //Backspace Key
    if (event.keyCode == 8 && event.metaKey) {
      console.log('🐰🥚 FOUND!!! Cmd + Backspace = clear all');
      for (innerElem of inputs) {
        innerElem.value = '';
      }
      inputs[0].focus();
    } else if (event.keyCode == 8) {
      if(elem.value === '') {
        this.previousElementSibling.focus();
        return;
      }
      elem.value = '';
    }
  });
}


function result() {
  document.querySelector("#section1").style.display = 'none';
  document.querySelector("#section2").style.display = 'block';
}


const btnOpenEl = document.querySelector(".btn-modal-open");
const btnCloseEl = document.querySelector(".btn-modal-close");
console.log(btnCloseEl);
const modal = document.getElementById("overlay");


btnOpenEl.addEventListener("click", openModal);

btnCloseEl.addEventListener("click", closeModal)

function openModal(){
	modal.style.display = "block";
}

function closeModal(){
	modal.style.display = "none";
}