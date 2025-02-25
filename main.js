let dialog = document.querySelector("dialog");
let showBox = document.querySelector(".addBook");
let close = document.querySelector("dialog img");
let form = document.querySelector("form");
let mainpannel = document.querySelector(".mainpannel");


let libary = [];
let bookred = false;
function Book(bookname, author, read,page) {
    this.bookname = bookname;
    this.author = author;
    this.read = read;
    this.page = page;
}


function addToLibary(bookname, author, read,page) {
    let book = new Book(bookname, author, read,page);
    libary.push(book);
    mainpannel.innerHTML = "";
    displayBooks(libary);

}

let readvalueCheck = document.querySelector("#read");

function displayBooks(libary) {

    mainpannel.innerHTML = "";
    let i = 0;
    libary.forEach(bookList => {

        let card = document.createElement("div");
        let removebtn = document.createElement("button");
        let readButton = document.createElement("button");


        card.className = "card";
        removebtn.innerHTML = "<p> remove <p>";
        removebtn.setAttribute("id", i);
        removebtn.className = "remove";
        readButton.className = "remove";
        readButton.setAttribute("id", i);
        i++;
        readButton.innerHTML = bookList.read;
        readButton.addEventListener("click",(e)=>{
            // bookred = !bookred;
            // readButton.innerHTML = (bookred === false) ? "Not Read": "Book Read";
            readButton.innerHTML = (bookList.read == "Not Read") ? "Book Read": "Not Read";
            bookList.read = readButton.innerHTML;
            console.log(bookList.read);
        })
        removebtn.addEventListener("click", (e) => {
            remove(removebtn.id);
        })
        
        card.innerHTML = `BookName: <h3>${bookList.bookname} </h3><br> Author <h3> ${bookList.author}</h3> <br>
        Pages: <h3> ${bookList.page}</h3> `;
        card.appendChild(removebtn);
        card.append(readButton);
        mainpannel.appendChild(card);
    });

}

function remove(index) {
    console.log(typeof(index));
    libary.splice(parseInt(index,10), 1);
    displayBooks(libary);
}
function Read(){
    bookred = !bookred;
    readvalueCheck.value = (bookred === false) ? "Not Read" : "Book Read";
}

form.addEventListener("submit", (e) => {
    let bookName = document.getElementById("bname").value;
    let author = document.getElementById("author").value;
    let readvalue = document.querySelector("#read");
    let page = document.getElementById("page").value;

    e.preventDefault();
    addToLibary(bookName, author, readvalue.value , page);
    dialog.close();
})
showBox.addEventListener("click", () => {
    dialog.showModal()
});

close.addEventListener("click", () => {
    dialog.close()
})


