let dialog = document.querySelector("dialog");
let showBox = document.querySelector(".addBook");
let close = document.querySelector("dialog img");
let form = document.querySelector("form");
let mainpannel = document.querySelector(".mainpannel");


let libary = [];
let bookred = false;
function Book(bookname, author, read) {
    this.bookname = bookname;
    this.author = author;
    this.read = read;
}


function addToLibary(bookname, author, read) {
    let book = new Book(bookname, author, read);
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
        removebtn.setAttribute("id", i++);
        removebtn.className = "remove";
        readButton.className = "remove";
        readButton.innerHTML = `${readvalueCheck.value}`;
        readButton.addEventListener("click",(e)=>{
            if(bookred === false){
                bookred = true;
                readButton.innerHTML = " Book has been read ";
            }else{
                console.log("Not read");
                bookred = false;
                readButton.innerHTML = "Not read ";

            }
        })
        removebtn.addEventListener("click", (e) => {
            console.log(libary.length);
            remove(removebtn.id);

        })
        
        card.innerHTML = `<h3>BookName:</h3> ${bookList.bookname}<br> <h3>Author</h3> ${bookList.author} <br> `;
        card.appendChild(removebtn);
        card.append(readButton);
        mainpannel.appendChild(card);
        console.log(removebtn);
    });

}

function remove(index) {
    console.log(typeof(index));
    libary.splice(index, 1);
    displayBooks(libary);
}
function Read(){
    if(bookred === false){
        bookred = true;
        readvalueCheck.value = "Book has been read ";
    }else{
        bookred = false;
        readvalueCheck.value = "Not read ";
    }
}
Object.setPrototypeOf(Book.prototype, addToLibary.prototype)

form.addEventListener("submit", (e) => {
    let bookName = document.getElementById("bname").value;
    let author = document.getElementById("author").value;
    let readvalue = document.querySelector("#read");
    e.preventDefault();

    addToLibary(bookName, author, readvalue);
    dialog.close();
})
showBox.addEventListener("click", () => {
    dialog.showModal()
});

close.addEventListener("click", () => {
    dialog.close()
})


