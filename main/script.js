
let books = [{
    "author": "Douglas Crockford",
    "imageLink": "../assets/0.jpg",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
  },
    {
      "author": "David Herman",
      "imageLink": "../assets/1.jpg",
      "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      "price": 22,
      "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      "author": "David Flanagan",
      "imageLink": "../assets/2.jpg",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
      "author": "Eric Elliott",
      "imageLink": "../assets/3.jpg",
      "title": "Programming JavaScript Applications",
      "price": 19,
      "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
      "author": "Addy Osmani",
      "imageLink": "../assets/4.jpg",
      "title": "Learning JavaScript Design Patterns",
      "price": 32,
      "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
      "author": "Boris Cherny",
      "imageLink": "../assets/5.jpg",
      "title": "Programming TypeScript",
      "price": 28,
      "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
      "author": "Alex Banks, Eve Porcello",
      "imageLink": "../assets/6.jpg",
      "title": "Learning React, 2nd Edition",
      "price": 25,
      "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
      "author": "Bradley Meck Alex Young and Mike Cantelon",
      "imageLink": "../assets/7.jpg",
      "title": "Node.js in Action",
      "price": 38,
      "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
      "author": "Kyle Simpson",
      "imageLink": "../assets/8.jpg",
      "title": "You Don't Know JS Yet: Get Started",
      "price": 26,
      "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
      "author": "John Resig and Bear Bibeault",
      "imageLink": "../assets/9.jpg",
      "title": "Secrets of the JavaScript Ninja",
      "price": 33,
      "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
  ]

let container = document.createElement('div');
container.setAttribute('class', 'header');
document.body.appendChild(container);

let left_arrow = document.createElement('button');
left_arrow.setAttribute('class', 'arrow left-arrow');
document.body.appendChild(left_arrow);

let right_arrow = document.createElement('button');
right_arrow.setAttribute('class', 'arrow right-arrow');
document.body.appendChild(right_arrow);

let div1 = document.createElement('div');
div1.setAttribute('class', 'wrapper');
document.body.appendChild(div1);

let img1 = document.createElement('div');
img1.setAttribute('class', 'images');
img1.setAttribute('alt', 'ahfqhehjfajfjajf');

let img = document.createElement('img');
img.setAttribute('src', books[0].imageLink)
img1.appendChild(img);
div1.appendChild(img1);

let info = document.createElement('div');
info.setAttribute('class', 'info');
div1.appendChild(info);

let author = document.createElement('h1');
author.setAttribute('class', 'author');
author.append(document.createTextNode(books[0].author));
info.appendChild(author);

let title = document.createElement('h3');
title.setAttribute('class', 'title');
title.append(document.createTextNode(books[0].title));
info.appendChild(title);

let price = document.createElement('p');
price.setAttribute('class', 'price');
price.append(document.createTextNode('Price: $'))
price.append(document.createTextNode(books[0].price));
info.appendChild(price);

let show_more = document.createElement('button');
show_more.setAttribute('class', 'show-more');
show_more.setAttribute('onclick', 'clicker()');
show_more.append(document.createTextNode('Show more'));
info.appendChild(show_more);


let add_item = document.createElement('button');
add_item.setAttribute('class', 'add-item');
add_item.append(document.createTextNode('Add item'));
info.appendChild(add_item);

let more_info = document.createElement('div');
more_info.setAttribute('class', 'more-info');
more_info.append(document.createTextNode(books[0].description));
info.appendChild(more_info);

let close_button = document.createElement('button');
close_button.setAttribute('class', 'close-button');
close_button.setAttribute('onclick', 'clicker()');
close_button.append(document.createTextNode('Close'));
more_info.appendChild(close_button);

let h1 = document.createElement('h1');
let h3 = document.createElement('h3');

let h1_text = document.createTextNode('Welcome to book shop');
let h3_text = document.createTextNode('We give you an opportunity to become an it-professional');


h1.appendChild(h1_text);
h3.appendChild(h3_text);


container.appendChild(h1)
container.appendChild(h3)

function clicker() {
  if (more_info.style.display === "block") {
    more_info.style.display = "none";
  } else {
    more_info.style.display = "block";
  }
}

  let i = 0;
  left_arrow.addEventListener('click', () => { if (i!=0)
    {
      i--;
      setter();
    } else {
      i=9;
      setter();
    }
  });

  right_arrow.addEventListener('click', () => { if (i!=books.length)
    {
      i++;
      setter();
    } else {
      i=0;
      setter();
    }
  });

  function setter() {
    img.setAttribute('src', books[i].imageLink);
    author.innerText = books[i].author;
    title.innerText = books[i].title;
    price.innerText = books[i].price;
    more_info.innerText = books[i].description;
    more_info.appendChild(close_button);
  }