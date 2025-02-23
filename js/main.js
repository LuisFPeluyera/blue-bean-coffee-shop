"use strict"
const renderCoffee = (coffee) => {
    let html = `    <div class = "card d-flex">
                    <a class="gentle-tilt-move-shake" href="#">
                        <p class = "coffee-id"> Coffee id: ${coffee.id}.</p>
                        <p> ${coffee.name} &nbsp</p>
                        <p class="bean-roast"> Bean Roast: ${coffee.roast}</p>
                    </a>
                </div>`;

    return html;
}

const renderCoffees = (coffees) => {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

const updateCoffees = (e) => {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach((coffee)=> {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }

    });
    coffeeOption.innerHTML = renderCoffees(filteredCoffees);
}

const searchCoffees = () => {
    let searchRoast = document.querySelector("#searchByName").value.toLowerCase();
    let filteredCoffees = [];
    coffees.forEach((coffee) => {
        if (coffee.name.toLowerCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeOption.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
let roastSelection = document.querySelector('#roast-selection');

let searchBox = document.querySelector('#searchByName');
searchBox.addEventListener("keyup", searchCoffees);

let coffeeOption = document.querySelector('#coffees');
coffeeOption.innerHTML = renderCoffees(coffees.reverse());

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees);