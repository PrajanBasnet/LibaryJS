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

function addToLibary(bookname, author, read) {
    mainpannel.innerHTML = "";
    let book = new Book(bookname, author, read);
    libary.push(book);

    for (let i = 0; i < libary.length; i++) {
        let wrapper = document.createElement("div");
        let checkbutton = document.createElement("input");
        let createButton = document.createElement("button");
        let newWrapper = document.createElement("p");

        newWrapper.className= "newWrapper";
        wrapper.className = "card";
        createButton.className = "btn";
        createButton.className = "checkbutton";
            

        let insertData = document.createTextNode(`BookName: ${libary[i].bookname}`)
        let authorText = document.createTextNode(`Author: ${libary[i].author} `)
        let text = document.createTextNode("delete");
        let checkButtonText = document.createTextNode("Did you read the Text");
        checkbutton.type = "checkbox";
        checkbutton.checked = libary[i].read;

        createButton.addEventListener("click", () => {
            let key = parseInt(createButton.dataset.dataId)
            libary.splice(key, 1);
            mainpannel.removeChild(wrapper);

        })
        
        createButton.dataset.dataId = i;

        createButton.appendChild(text);
        
        newWrapper.appendChild(insertData);
        newWrapper.appendChild(document.createElement("br"));
        newWrapper.appendChild(authorText);
        
        wrapper.appendChild(createButton);
        wrapper.appendChild(checkButtonText);
        wrapper.appendChild(document.createElement("br"));
        wrapper.appendChild(checkbutton);        
        wrapper.appendChild(newWrapper);
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


