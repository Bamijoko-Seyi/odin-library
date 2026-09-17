const listContainer = document.querySelector('.list-container');
const addNewBookButton = document.querySelector('#add-new-book-button');
const formArea = document.querySelector('.form-area');
const cancelButton = document.querySelector('#cancel-button');
const addBookButton = document.querySelector('#add-book-button');
const deleteButton = document.querySelector('#delete-button');

const myLibrary = [];

function Book(title, author, yearOfPub, category, description) {
  this.name = title;
  this.author = author;
  this.yearOfPub = yearOfPub;
  this.category = category;
  this.description = description;
  this.completed = false;
  this.id = crypto.randomUUID()

}

function addBookToLibrary(title, author, yearOfPub, category, description) {
  const newBook = new Book(title, author, yearOfPub, category, description);
  myLibrary.push(newBook)
  displayBooks()
}

function removeBookFromLibrary(bookId){
    const index = myLibrary.findIndex(book => book.id === bookId);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks();
    }
}

function displayBooks() {
    listContainer.replaceChildren(); 

    for (let book of myLibrary) {     
        const newDiv = document.createElement('div');
        const newH2 = document.createElement('h2');
        const newH3 = document.createElement('h3');
        const newH4 = document.createElement('h4');
        const newP = document.createElement('p');
        const newReadButton = document.createElement('button')
        const newDeleteButton = document.createElement('button')

        newDiv.setAttribute('class', 'book-container');
        newH2.setAttribute('class', 'title');
        newH3.setAttribute('class', 'author');
        newH4.setAttribute('class', 'category');
        newP.setAttribute('class', 'description');
        newReadButton.setAttribute('class', 'read-button');
        newDeleteButton.setAttribute('class', 'delete-button');

        newH2.textContent = book.name;
        newH3.textContent = `${book.author}, ${book.yearOfPub}`;
        newH4.textContent = book.category;
        newP.textContent = book.description;
        newReadButton.textContent = "In Progress";
        newDeleteButton.textContent = "Delete";

        newReadButton.addEventListener('click' , () => {
            if (book.completed) {
              book.completed = false;
              newReadButton.textContent = "In Progress";
            }

            else{
              book.completed = true
              newReadButton.textContent = "Read";
            }
        })

        newDeleteButton.addEventListener('click', () => {
            removeBookFromLibrary(book.id);
        });

        newDiv.appendChild(newH2);
        newDiv.appendChild(newH3);
        newDiv.appendChild(newH4);
        newDiv.appendChild(newP);
        newDiv.appendChild(newReadButton)
        newDiv.appendChild(newDeleteButton);

        listContainer.appendChild(newDiv);
    }

}

addNewBookButton.addEventListener("click", () => {
    formArea.hidden = false;
    addNewBookButton.hidden = true;
})

cancelButton.addEventListener('click', () => {
    formArea.hidden = true;
    addNewBookButton.hidden = false;
    document.querySelectorAll('.form-container input, .form-container textarea')
        .forEach(element => element.value = '');
});

addBookButton.addEventListener('click', () => {
    const title = document.querySelector('#book_title').value.trim();
    const author = document.querySelector('#author_name').value.trim();
    const yearOfPub = document.querySelector('#publication_date').value.trim();
    const category = document.querySelector('#category').value.trim();
    const description = document.querySelector('#description').value.trim();

    if (!title || !author || !yearOfPub || !category || !description) {
        alert('Please fill in all fields');
        return;
    }

    addBookToLibrary(title, author, yearOfPub, category, description);

    formArea.hidden = true;
    addNewBookButton.hidden = false;

    document.querySelectorAll('.form-container input, .form-container textarea')
        .forEach(element => element.value = '');
})
