// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()
console.log("Hi")

import {searchNews, append, appendB} from "./fetch.js"

let container = document.getElementById("results")

let in_data = JSON.parse(localStorage.getItem("news"))
// console.log(in_data)


let myfunction = async(e) => {
    let query = document.getElementById("search_input").value
    if(e.key === "Enter"){
        localStorage.setItem("data", JSON.stringify(query))
        window.location.href = "search.html"
        // let data =  await searchNews(query, "?q") 
        // console.log(data)
        // document.getElementById("detailed_news").innerHTML = ""
        // let container = document.getElementById("detailed_news")
        // append(data, container)
    }
}

let myfunctionB = async(e) => {
    let query = JSON.parse(localStorage.getItem("news"))
        // let data =  await searchNews(query, "?q")
        document.getElementById("detailed_news").innerHTML = ""
        let container = document.getElementById("detailed_news")
        appendB(query, container)
}

myfunctionB()

document.getElementById("search_input").addEventListener("keydown", myfunction)