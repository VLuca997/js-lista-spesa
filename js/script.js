// creo un array per i prodotti della spesa
//stampiamo a schermo tutti i prodotti inseriti nell'array

// array shopping
const shoppingList = [
    "Pane", 
    "Latte",
    "Uova",
    "Caffè",
    "Banane"
];

//we create uls to insert the printed shopping list to him.
let ul = document.createElement(`ul`);

//initialize the counter
let i = 0;

//let's use a While loop to print on the DOM
while (i < shoppingList.length) {

    //initialize the " li " printed to hang the elements
    let li = document.createElement(`li`);

    //we set the element by attributing it to the designated li.
    li.textContent = shoppingList[i];

    //append LI to UL
    ul.appendChild(li);

    //counter increment 
    i++;

}
document.body.appendChild(ul);

// ho cambiato nomi alle classi e ora funziona, wooottt????




