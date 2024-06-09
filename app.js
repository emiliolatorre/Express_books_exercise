const express = require("express"); //llamamos al servidor
const app = express(); //inicializar el servidor
const port = 3000;

const books = require('./data/books.json');

app.get('/', function(req, res) {
    res.send('This is Express_books_exercise');
  });

// Ejercicio 1
app.get('/all', function (req, res) {
    res.json(books);
});

// Ejercicio 2
app.get('/first', (req, res) => {
    const firstBook = books[0];
    res.send(firstBook);
});

// Ejercicio 3
app.get('/last', (req, res) => {
    const lastBook = books[books.length-1];
    res.send(lastBook);
});

// Ejercicio 4
app.get('/middle', (req, res) => {
    const middleBook = books[49];
    res.send(middleBook);
});

// Ejercicio 5
app.get('/author/dante-alighieri', (req, res) => {
    let danteTitle;
    for(const element of books) {
        if (element.author === "Dante Alighieri") {
            danteTitle = element.title;
            break;
        }
    }
    res.send(danteTitle)
});

// Ejercicio 6
app.get('/country/charles-dickens', (req, res) => {
    let charlesCountry;
    for(const element of books) {
        if (element.author === "Charles Dickens") {
            danteTitle = element.country;
            break;
        }
    }
    res.send(charlesCountry)
});

// Ejercicio 7
app.get('/year&pages/cervantes', (req, res) => {
    let cervantesPages;
    let cervantesYear
    for(const element of books) {
        if (element.author === "Miguel de Cervantes") {
            cervantesPages = element.pages;
            cervantesYear = element.year
            break;
        }
    }

    const cervantesResp = {
        pages: cervantesPages,
        year: cervantesYear
    }
    res.json(cervantesResp)
});

// Ejercicio 8
app.get('/country/count/spain', (req, res) => {
    let spainBooks = 0;
    for(const element of books) {
        if (element.country === "Spain") {
            spainBooks++;
        }
    }
    res.send(spainBooks);
});

// Ejercicio 9
app.get('/country/at-least/germany', (req, res) => {
    let germanyBook = books.some(element, element.country === "Germany");
    res.send(germanyBook);
});

// Ejercicio 10
app.get('/pages/all-greater/200', (req, res) => {
    let booksMore200Pages = books.every(element, element.pages > 200);
    res.send(booksMore200Pages);
});

