const textinput = document.getElementById('textInput')
const movie_holder = document.getElementById('movie_holder')

textinput.addEventListener('keydown',event=>{
    if (event.key==="Enter"){
        console.log(textinput.value)
    
    const url= window.location.origin+`/search?title=${textinput.value}`
     fetch(url)
       .then(response => response.json())
       .then(data => {
        console.log(movie_holder)
        movie_holder.innerHTML=""
       data.results.forEach(movie => {
            movie_holder.innerHTML+=`<p>${movie.title}</p>`
       })
       })

       .catch(err => console.error(err));
    }
})

