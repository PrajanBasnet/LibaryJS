let dialog = document.querySelector("dialog");
let showBox = document.querySelector(".addBook");
let close = document.querySelector("dialog button");
let form = document.querySelector("form");
let mainpannel = document.querySelector(".mainpannel");


let libary = [];


function Book(bookname, author, read) {
    this.bookname = bookname;
    this.author = author;
    this.read = read;

}
Book.prototype.readvalue = function(){
     this.read;
     let checkbutton = document.createElement("input");
     checkbutton.type = "checkbox";
     checkbutton.checked = this.read;
}


function addToLibary(bookname, author, read) {
    mainpannel.innerHTML = "";
    let book = new Book(bookname, author, read);
    libary.push(book);
    book.readvalue();
    
    for (let i = 0; i < libary.length; i++) {
        let wrapper = document.createElement("div");
        let checkbutton = document.createElement("input");
        wrapper.className = "card";
        let insertData = document.createTextNode(`${libary[i].bookname} - ${libary[i].author}`)
        let createButton = document.createElement("button");
        createButton.className = "btn";
        let text = document.createTextNode("Button");
    
        checkbutton.type = "checkbox";
        checkbutton.checked = book.readvalue();

        createButton.addEventListener("click", () => {
            let key = parseInt(createButton.dataset.dataId)
            libary.splice(key, 1);
            mainpannel.removeChild(wrapper);

        })
        
        createButton.dataset.dataId = i;
        createButton.appendChild(text);
        wrapper.appendChild(createButton);
        wrapper.appendChild(checkbutton);

        
        wrapper.appendChild(insertData);
        mainpannel.appendChild(wrapper);
        
    }

}
Object.setPrototypeOf(Book.prototype,addToLibary.prototype)



form.addEventListener("submit", (e) => {
    let bookName = document.getElementById("bname").value;
    let author = document.getElementById("author").value;
    let readvalue = document.querySelector("#read");

    e.preventDefault();

    // if(readd.value == "o")
    addToLibary(bookName, author, readvalue.checked);
    dialog.close();
})
showBox.addEventListener("click", () => {
    dialog.showModal()
});

close.addEventListener("click", () => {
    dialog.close()
})


