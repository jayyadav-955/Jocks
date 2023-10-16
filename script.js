const jokepitara = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getjock = ()=>{
    jokepitara.classList.remove("fade")
    fetch(url)
    .then(data =>data.json())
    .then(item =>{
        jokepitara.textContent=item.joke
        jokepitara.classList.add("fade")
    })

}
btn.addEventListener('click',getjock)
getjock()