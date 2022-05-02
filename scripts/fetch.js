let searchNews = async (query, input) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/${input}=${query}`)
        let data = await res.json()
        return data
        // append(data.articles)
    } catch (err) {
        console.log(err)
    }
}

let append = (data, container) => {
    // console.log(data)
    data.map((elem) => {
        // let container = document.getElementById("results")
        let box = document.createElement("div")
        box.setAttribute("id","box")
        box.setAttribute("class", "news")
        let first = document.createElement("div")
        first.setAttribute("id", "first")
        let second = document.createElement("div")
        second.setAttribute("id", "second")

        let image = document.createElement("img")
        image.src = elem.urlToImage

        let titleA = document.createElement("h3")
        titleA.textContent = elem.title

        let contentA = document.createElement("p")
        contentA.textContent = elem.content

        first.append(image)
        second.append(titleA, contentA)
        box.append(first, second)
        box.addEventListener("click", function(){
            console.log(elem)
            localStorage.setItem("news", JSON.stringify(elem))
            window.location.href = "news.html"
        })
        container.append(box)
    })


}


let appendB = (data, container) => {
    // console.log(data.author)
    // data.map((elem, container) => {
        // let container = document.getElementById("results")
        let box = document.createElement("div")
        box.setAttribute("id","box")
        box.setAttribute("class", "news")
        let first = document.createElement("div")
        first.setAttribute("id", "first")
        let second = document.createElement("div")
        second.setAttribute("id", "second")

        let image = document.createElement("img")
        image.src = data.urlToImage

        let titleA = document.createElement("h3")
        titleA.textContent = data.title

        let contentA = document.createElement("p")
        contentA.textContent = data.content

        first.append(image)
        second.append(titleA, contentA)
        box.append(first, second)
        box.addEventListener("click", function(){
            console.log(elem)
            localStorage.setItem("news", JSON.stringify(elem))
            window.location.href = "news.html"
        })
        container.append(box)
    // })


}
export { searchNews, append, appendB }