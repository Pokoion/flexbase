const liburuak = [
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "8507716-M.jpg"
    }
  ]

let izenburua = document.getElementById("izenburua")
let egilea = document.getElementById("egilea")
let isbn = document.getElementById("isbn")
let data = document.getElementById("data")
let left = document.getElementById("leftbutton")
let right = document.getElementById("rightbutton")

const IMG1 = "https://covers.openlibrary.org/b/id/"
let argazkia = document.getElementById("argazkia")

//Liburuentzat indizea
let index = 0;

//Liburua aldatzeko funtzioa
let change_book = (index) => {
    izenburua.value = liburuak[index].izenburua
    egilea.value = liburuak[index].egilea
    isbn.value = liburuak[index].isbn
    data.value = liburuak[index].data
    argazkia.src = IMG1 + liburuak[index].filename
}

//Hasieran lehen liburua jarri
change_book(0)

//Ezkerreko liburua aukeratzeko funtzioa
let ezkerrera = () => {
    index = (index == 0)? liburuak.length-1 : index - 1;
    change_book(index)
}

//Eskubiko liburua aukeratzeko funtzioa
let eskubira = () => {
    index = (index == liburuak.length-1)? 0 : index + 1;
    change_book(index)
}

//Botoiei Event Listener-ak gehitu
left.addEventListener("click", ezkerrera)
right.addEventListener("click", eskubira)