const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);
//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));



// Zadanie 6
/*
Stwórz kompozycję która na tablicy „books” zlicza ilość liter w tytule (title) nie licząc spacji,
gdzie strony (pages) są parzyste oraz genre kończy się na literkę „y”.
*/
console.log("\nZADANIE 6: ");
const noSpace = (list) => list.map(({title}) => title.replace(" ","").length);
//const noSpaceTitles = (list) => list.map(({title}) => title.replace(" ","")); // Całe tytuły, a nie sumy liter na nie się składających

const evenPages = (list) => list.filter(({pages}) => pages%2==0);

const genreYisLastLetter = (list) => list.filter(({genre}) => genre.endsWith('y'));

const sumTitleCount = (book) => book.reduce((currSum, newTitle) => currSum + newTitle);

const zadanie6TitleLetterCountSum = compose(sumTitleCount, noSpace, evenPages, genreYisLastLetter);
//const zadanie6TitleLetterCountTitles = compose(noSpaceTitles, evenPages, genreYisLastLetter); // Tytuły książek pasujących do filtrów (bez spacji)
//const zadanie6TitleLetterCount = compose(noSpace, evenPages, genreYisLastLetter); // Policzone litery tytułów książek pasujących do filtrów, ale osobno
    
console.log("Suma ilości liter z tytułów książek pasujących do filtrów: " + zadanie6TitleLetterCountSum(books));
//console.log(zadanie6TitleLetterCountTitles(books)); // Tytuły książek pasujących do filtrów (bez spacji)
//console.log(zadanie6TitleLetterCount(books)); // Policzone litery tytułów książek pasujących do filtrów, ale osobno



// Zadanie 7
/*
Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5),
gdzie strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę.
*/
console.log("\nZADANIE 7: ");
const goodRating = (list) => list.filter(({rating}) => rating>5);

const oddPages = (list) => list.filter(({pages}) => pages%2==1);

const containsNumbers = (list) => list.filter(({title}) => /[0-9]/.test(title));

const mapToRatings = (list) => list.map(({rating}) => rating);

const sumRatings = (book) => book.reduce((currSum, newRating) => currSum + newRating);

const zadanie7Rating = compose(sumRatings, mapToRatings, containsNumbers, oddPages, goodRating);
try{
    console.log(zadanie7Rating(books));
}
catch (e){
    console.error("\nWykonując zadanie zgodnie z poleceniem wyskoczy błąd, ponieważ w tablicy nie ma książek pasujących do filtrów. \n\n" + e, e.stack);
}
console.log("Dodałem więc kilka własnych przykładów do tablicy, aby pokazać, że kod działa: ");
books.push(
    // Własne przykłady, aby pokazać, że kod z zadania 7 działa.
    {title: 'Renewer11', pages: 111, genre: 'biology', rating: 6},
    {title: 'Renewer22', pages: 333, genre: 'biology', rating: 6},
    {title: 'Renewer33', pages: 555, genre: 'biology', rating: 8},
    {title: 'Renewer44', pages: 777, genre: 'biology', rating: 8},
    {title: 'Renewer55', pages: 999, genre: 'biology', rating: 7},
    {title: 'Renewer66', pages: 123, genre: 'biology', rating: 9},
);
console.log("Suma ocen książek pasujących do filtrów: "+zadanie7Rating(books));
books.splice(9,6); // Przywrócenie tablicy 'books' do pierwotnego stanu, aby nie zaburzyć prawidłowości reszty kodu


// Zadanie 8
/*
Stwórz kompozycję która na tablicy „books” zwraca drugi najdłuższy tytuł (title).
*/
console.log("\nZADANIE 8: ");

const sortTitles = (list) => list.sort((a,b) => b.title.length - a.title.length);
console.log(sortTitles(books)[1]);
// TODO: Na razie nie wiem jak to zrobić kompozycją 