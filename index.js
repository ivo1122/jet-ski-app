let counter = 0;

let numberOfPassengers = document.getElementById("number-of-passengers");
let numberOfRides = document.getElementById("number-of-rides");

let todaysRides = [];


function add()  {
    counter += 1;
    numberOfPassengers.innerHTML = counter;
}


function save() {
    todaysRides.push(counter);
    numberOfRides.textContent = `Današnje voznje (broj putnika): ${todaysRides.join(" - ") || 0}`;
    counter = 0;
    numberOfPassengers.textContent = counter;
}
   
function reset() {
    counter = 0;
    todaysRides = [] ;
    numberOfRides.textContent = `Današnje voznje (broj putnika): ${todaysRides.join(" - ") || 0}`;
    numberOfPassengers.textContent = counter;

}

