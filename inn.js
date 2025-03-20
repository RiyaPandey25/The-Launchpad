// Search Books Function
function searchBooks() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let books = document.getElementsByClassName("book");

    for (let i = 0; i < books.length; i++) {
        let title = books[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        let author = books[i].getElementsByTagName("p")[0].innerText.toLowerCase();

        if (title.includes(input) || author.includes(input)) {
            books[i].style.display = "block";
        } else {
            books[i].style.display = "none";
        }
    }
}

// View Book Detail
function viewBook(title, author, description, copies, image) {
    document.getElementById("bookTitle").innerText = title;
    document.getElementById("bookAuthor").innerText = author;
    document.getElementById("bookDescription").innerText = description;
    document.getElementById("bookCopies").innerText = copies;
    document.getElementById("bookImage").src = image;
    
    document.getElementById("bookDetail").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("bookDetail").style.display = "none";
}

// Open Add Book Form
function openForm() {
    document.getElementById("addBookForm").style.display = "flex";
}

// Close Add Book Form
function closeForm() {
    document.getElementById("addBookForm").style.display = "none";
}

// Add New Book to List
function addBook() {
    let title = document.getElementById("bookName").value;
    let author = document.getElementById("bookAuthor").value;
    let description = document.getElementById("bookDesc").value;
    let copies = document.getElementById("bookCopies").value;
    let image = document.getElementById("bookImage").value;

    if (title && author && description && copies && image) {
        let bookList = document.getElementById("bookList");
        let newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.setAttribute("onclick", `viewBook('${title}', '${author}', '${description}', '${copies}', '${image}')`);
        newBook.innerHTML = `<img src="${image}" alt="${title}"><h3>${title}</h3><p>${author}</p>`;
        bookList.appendChild(newBook);

        // Form Reset & Close
        document.getElementById("bookName").value = "";
        document.getElementById("bookAuthor").value = "";
        document.getElementById("bookDesc").value = "";
        document.getElementById("bookCopies").value = "";
        document.getElementById("bookImage").value = "";
        closeForm();
    } else {
        alert("Please fill all fields!");
    }
}
