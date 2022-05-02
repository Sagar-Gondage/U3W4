// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
// console.log(navbar)
document.getElementById("navbar").innerHTML = navbar();

import {searchNews, append} from "./fetch.js"

let myfunction = async(e) => {
    let query = document.getElementById("search_input").value
    if(e.key === "Enter"){
        localStorage.setItem("data", JSON.stringify(query))
        window.location.href = "search.html"
        let data =  await searchNews(query, "?q") 
        console.log(data)
        document.getElementById("results").innerHTML = ""
        let container = document.getElementById("results")
        append(data.articles, container)
    }
}

let myfunctionB = async(e) => {   
        let data =  await searchNews("in", "top-headlines?country") 
        document.getElementById("results").innerHTML = ""
        console.log(data)
        let container = document.getElementById("results")
        append(data.articles, container)    
}

let details = document.getElementById("details").children


async function Csearch() {
    let data = await searchNews(this.id, "top-headlines?country")
    document.getElementById("results").innerHTML = ""
    let container = document.getElementById("results")
    append(data.articles, container)
}

for(let el of details) {
    // console.log(el.id)
    el.addEventListener("click", Csearch)
}

// document.getElementById("search_input").addEventListener("keydown")



myfunctionB()
document.getElementById("search_input").addEventListener("keydown", myfunction)

