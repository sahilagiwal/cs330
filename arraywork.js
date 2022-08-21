const button = document.querySelector(".click");
const datagoeshere = document.querySelector(".datagoeshere");
  let array = [];
  let greaterArray = [];
button.onclick = function () {
  let sum = 0;
  array = [];
  greaterArray = [];
  for (var i = 0; i < 5; i++) {
    let k = Math.floor(Math.random() * 100);
    array.push(k);
  }
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  let mean = sum / array.length;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mean) {
      greaterArray.push(array[i]);
    }
  }
  let line1 = "";
  for (let i = 0; i < array.length; i++) {
    if (i != array.length - 1) {
      line1 = line1 + array[i] + ", ";
    } else {
      line1 = line1 + array[i];
    }
  }
  let line3 = "";
  for (let i = 0; i < greaterArray.length; i++) {
    if (i != greaterArray.length - 1) {
      line3 = line3 + greaterArray[i] + ", ";
    } else {
      line3 = line3 + greaterArray[i];
    }
  }
  datagoeshere.innerHTML =
    "The array is: " +
    line1 +
    "<br>" +
    "The mean is: " +
    mean +
    "<br>" +
    "Greater :" +
    line3;
};

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
