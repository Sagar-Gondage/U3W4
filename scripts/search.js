// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()
// console.log("Hi")

import {searchNews, append} from "./fetch.js"

let data = JSON.parse(localStorage.getItem("data"))
// console.log(data)

let myfunction = async(e) => {
    let query = JSON.parse(localStorage.getItem("data"))
        let data =  await searchNews(query, "?q")
        document.getElementById("results").innerHTML = ""
        let container = document.getElementById("results")
        append(data.articles, container)
}

let myfunctionB = async(e) => {
    let query = document.getElementById("search_input").value
    if(e.key === "Enter"){
        localStorage.setItem("data", JSON.stringify(query))
        window.location.href = "search.html"
        let data =  await searchNews(query, "?q") 
        // console.log(data)
        document.getElementById("results").innerHTML = ""
        let container = document.getElementById("results")
        append(data.articles, container)
    }
}

myfunction()

document.getElementById("search_input").addEventListener("keydown", myfunctionB)

