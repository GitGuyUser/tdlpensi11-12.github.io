let input = document.getElementById("input");
let listDisplay = document.getElementById("todolist");
let btn = document.getElementById("btn");
btn.addEventListener("click", addList)
let lists = []
let date = new Date();
let colors = ["primary", "secondary", "warning", "danger", "success", "info"]
let xBtn = document.getElementsByClassName("x")
let cards = document.getElementsByClassName("card")

function randomNum() {
    let random = Math.floor(Math.random() * 6) ;
    return random
}

setInterval(randomNum, 100)


function addList() {
    lists.push(input.value)
    for (let i = 0; i < lists.length; i++)
    {
        var card = document.createElement("div")
        card.setAttribute("class", `card text-white bg-${colors[randomNum()]} mb-3`)
        card.style.width = "15rem";
        
        var x = document.createElement("i");
        x.setAttribute("class", "bi bi-x-lg x")
        var header = document.createElement('div')
        header.setAttribute("class", "card-header")
        header.style.display = "flex"
        header.style.justifyContent = "space-between"
        header.appendChild(document.createTextNode(`Created at ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)) 
        header.appendChild(x);
        
        
        var list = lists[i]
        var p = document.createElement("p")
        p.setAttribute("class", "card-text")
        p.appendChild(document.createTextNode(list))
        
        var body = document.createElement("div")
        body.setAttribute("class", "card-body")
        body.appendChild(p)

        card.appendChild(header);
        card.appendChild(body);
    }
    listDisplay.appendChild(card)
}


function removeList() {
    for (let i = 0; i < xBtn.length; i++) {
        const xBtns = xBtn[i];
        xBtns.addEventListener("click", function () {
            cards[i].style.display = "none"
        })
    }
}

setInterval(removeList, 1000)