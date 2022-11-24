fetch('https://cataas.com/api/tags')
.then((response) => response.json())
.then((data) => console.log(data));

/* Zadanie 1, 2, 3, 4: */
let catFunction = () => {
    let tag = document.getElementById("someButton").value;
    fetch('https://cataas.com/cat/'+tag+"?json=true")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("spaceForCats").src = "https://cataas.com"+(data.url);
    });
};



/* Zadanie 5: */
let catWithTag = () => {
    let tag = document.getElementById("catTag").value;
    fetch('https://cataas.com/cat/'+tag+"?json=true")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("spaceForSpecificCats").src = "https://cataas.com"+(data.url);
    });
};



/* Zadanie 6: */
/*TODO: Do zrobienia.*/

