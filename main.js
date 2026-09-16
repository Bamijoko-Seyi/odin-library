const listContainer = document.querySelector('#list-container');

const myLibrary = [];

function Book(title, author, yearOfPub, category, description) {
  this.name = title;
  this.author = author;
  this.yearOfPub = yearOfPub;
  this.category = category;
  this.description = description;
  this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, yearOfPub, category, description) {
  let newBook = new Book(title,author,)
  myLibrary.push(newBook)
  displayBooks()
}

function displayBooks() {
    listContainer.replaceChildren(); 

    for (let book of myLibrary) {     
        const newDiv = document.createElement('div');
        const newH2 = document.createElement('h2');
        const newH3 = document.createElement('h3');
        const newH4 = document.createElement('h4');
        const newP = document.createElement('p');

        newDiv.setAttribute('class', 'book-container');
        newH2.setAttribute('class', 'title');
        newH3.setAttribute('class', 'author');
        newH4.setAttribute('class', 'category');
        newP.setAttribute('class', 'description');

        newH2.textContent = book.name;
        newH3.textContent = book.author;
        newH4.textContent = book.category;
        newP.textContent = book.description;

        
        newDiv.appendChild(newH2);
        newDiv.appendChild(newH3);
        newDiv.appendChild(newH4);
        newDiv.appendChild(newP);

        listContainer.appendChild(newDiv);
    }
}


