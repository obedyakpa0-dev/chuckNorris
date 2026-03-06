const loadJoke =  async ()=>{
    try{
        const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            header: {
                Accept:'application/json'
            }
        });

        const jokeData= await chuckNorrisFetch.json();
        document.getElementById('loadingJoke').textContent = jokeData.value
    } catch(error){
        console.log(error)
    }
}

document.getElementById('loadJokeBtn').addEventListener('click', loadJoke);

