let dialog = document.querySelector("dialog");
let showBox= document.querySelector("dialog + button");
let close = document.querySelector("dialog button");
let form = document.querySelector("form");
let mainpannel = document.querySelector(".mainpannel");
let libary = [];


function Book(bookname, author,read){
    this.bookname = bookname;
    this.author = author;
    this.read = read;
    this.printValue = function(){
        console.log(this.bookname,this.author,this.read);
    }
}   

let dataKey = 0;
function addToLibary(bookname,author,read){
    let book = new Book(bookname,author,read);
     libary.push(book);
     libary.forEach(data => {
        console.log(libary)
        let wrapper = document.createElement("div");
        let insertData = document.createTextNode(
            `${data.bookname} - ${data.author}`
        )
        wrapper.appendChild(insertData);
        mainpannel.appendChild(wrapper);
     });

     console.log(libary.length)
}



form.addEventListener("submit",(e)=>{
    let bookName = document.getElementById("bname").value;
    let author = document.getElementById("author").value;

    e.preventDefault();
     addToLibary(bookName,author,true);
    dialog.close();
})
showBox.addEventListener("click",()=>{
    dialog.showModal()
});

close.addEventListener("click",()=>{
    dialog.close()
})


