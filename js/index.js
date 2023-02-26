const loadData = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quote => {
    console.log(quote.quote);
    const div= document.getElementById('q-body')
    div.innerHTML = `
    <div class="card text-center bg-dark text-white pb-3" style="width: 20rem;">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">${quote.quote} </p>
                <button onclick="loadData();" type="button" class=" btn btn-outline-info">New Quote</button>
                </div>
            </div>
    `
}
loadData();