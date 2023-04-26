var burgertotal = 0;
var friestotal = 0;
var toppingstotal = 0;

var bacontoppings = false
var picklestoppings = false
var cheesetoppings = false
var pattiestoppings = false

const cost_result = document.getElementById("cost-result");

const small_burger = document.getElementById("small-burger-size");
const regular_burger = document.getElementById("regular-burger-size");

const regular_fries = document.getElementById("regular-fries-size");
const large_fries = document.getElementById("large-fries-size");

const bacon_toppings = document.getElementById("bacon-toppings");
const pickles_toppings = toppings = document.getElementById("pickles-toppings");
const cheese_toppings = document.getElementById("cheese-toppings");
const patties_toppings = document.getElementById("patties-toppings");

function burgerpricecheck(amount) {
  if (burgertotal <= 0) {
    burgertotal = burgertotal+amount;
  } else {
    return "failed";
  }
}

function friespricecheck(amount) {
  if (friestotal <= 0) {
    friestotal = friestotal+amount;
  } else {
    return "failed";
  }
}

function burgers(itemnumber) {
  if (itemnumber == 1) {
    let amount = 9.12;
    small_burger.style.borderColor = "#80FF33";
    regular_burger.style.borderColor = "#fff";
    if (burgerpricecheck(amount) == "failed") {
      burgertotal = burgertotal-11.21;
      burgertotal = burgertotal+amount;
    }
    console.log(burgertotal);
  } else if (itemnumber == 2) {
    let amount = 11.21;
    regular_burger.style.borderColor = "#80FF33";
    small_burger.style.borderColor = "#fff";
    if (burgerpricecheck(amount) == "failed") {
      burgertotal = burgertotal-9.12;
      burgertotal = burgertotal+amount;
    }
    console.log(burgertotal);
  }
}

function fries(itemnumber) {
  if (itemnumber == 1) {
    let amount = 2.47;
    regular_fries.style.borderColor = "#80FF33";
    large_fries.style.borderColor = "#fff";
    if (friespricecheck(amount) == "failed") {
      friestotal = friestotal-3.29;
      friestotal = friestotal+amount;
    }
    console.log(friestotal);
  } else if (itemnumber == 2) {
    let amount = 3.29;
    large_fries.style.borderColor = "#80FF33";
    regular_fries.style.borderColor = "#fff";
    if (friespricecheck(amount) == "failed") {
      friestotal = friestotal-2.47;
      friestotal = friestotal+amount;
    }
    console.log(friestotal);
  }
}

function toppingsfunction(itemnumber) {
  if (itemnumber == 1) {
    if (bacontoppings == false) {
      bacontoppings = true;
      bacon_toppings.style.borderColor = "#80FF33";
      toppingstotal = toppingstotal+1.50;
      console.log(toppingstotal);
    } else if (bacontoppings == true) {
      bacontoppings = false;
      bacon_toppings.style.borderColor = "#fff";
      toppingstotal = toppingstotal-1.50;
      console.log(toppingstotal);
    }
  } else if (itemnumber == 2) {
    if (picklestoppings == false) {
      picklestoppings = true;
      pickles_toppings.style.borderColor = "#80FF33";
      toppingstotal = toppingstotal+1.00;
      console.log(toppingstotal);
    } else if (picklestoppings == true) {
      picklestoppings = false;
      pickles_toppings.style.borderColor = "#fff";
      toppingstotal = toppingstotal-1.00;
      console.log(toppingstotal);
    } 
  } else if (itemnumber == 3) {
    if (cheesetoppings == false) {
      cheesetoppings = true;
      cheese_toppings.style.borderColor = "#80FF33";
      toppingstotal = toppingstotal+0.50;
      console.log(toppingstotal);
    } else if (cheesetoppings == true) {
      cheesetoppings = false;
      cheese_toppings.style.borderColor = "#fff";
      toppingstotal = toppingstotal-0.50;
      console.log(toppingstotal);
    } 
  } else if (itemnumber == 4) {
    if (pattiestoppings == false) {
      pattiestoppings = true;
      patties_toppings.style.borderColor = "#80FF33";
      toppingstotal = toppingstotal+1.50;
      console.log(toppingstotal);
    } else if (pattiestoppings == true) {
      pattiestoppings = false;
      patties_toppings.style.borderColor = "#fff";
      toppingstotal = toppingstotal-1.50;
      console.log(toppingstotal);
    } 
  }
}

function costresult() {
  const total = burgertotal + friestotal + toppingstotal;
  const totaltax = ((15/100)*total).toFixed(2);
  const aftertax = (((15/100)*total)+total).toFixed(2);
  cost_result.innerHTML = `Burgers Total: $${burgertotal} <br> Fries Total: $${friestotal} <br> Toppings Total: $${toppingstotal} <br> Subtotal: $${total} <br> Tax: 15% (HST) or $${totaltax} <br> Total Cost: $${aftertax}`;
}