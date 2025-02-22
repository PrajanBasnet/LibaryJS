let dialog = document.querySelector("dialog");
let showBox = document.querySelector("dialog + button");
let close = document.querySelector("dialog button");
let form = document.querySelector("form");
let libary = [];


function Book(bookname, author, read) {
    this.bookname = bookname;
    this.author = author;
    this.read = read;
    this.printValue = function () {
        console.log(this.bookname, this.author, this.read);
    }
}

function addToLibary(bookname, author, read) {
    let book = new Book(bookname, author, read);
    libary.push(book);
    let mainpannel = document.querySelector(".mainpannel");
    mainpannel.innerHTML = "";

    for (let i = 0; i < libary.length; i++) {
        let wrapper = document.createElement("div");
        wrapper.className = "card";
        let insertData = document.createTextNode(`${libary[i].bookname} - ${libary[i].author}`)
        let createButton = document.createElement("button");
        createButton.className = "btn";
        let text = document.createTextNode("Button");
        createButton.addEventListener("click", () => {
            let key = parseInt(createButton.dataset.dataId)
            console.log(libary);
            libary.splice(key,1);
            mainpannel.removeChild(wrapper);
            
            
        })
        
                createButton.dataset.dataId = i;
                createButton.appendChild(text);
        wrapper.appendChild(createButton);
        wrapper.appendChild(insertData);
        mainpannel.appendChild(wrapper);


        console.log(wrapper);
        console.log(createButton);
    }

}



form.addEventListener("submit", (e) => {
    let bookName = document.getElementById("bname").value;
    let author = document.getElementById("author").value;

    e.preventDefault();
    addToLibary(bookName, author, true);
    dialog.close();
})
showBox.addEventListener("click", () => {
    dialog.showModal()
});

close.addEventListener("click", () => {
    dialog.close()
})


