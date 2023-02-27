const loadData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = quote => {
    console.log(quote.quote);
    const div = document.getElementById('q-body')
    div.innerHTML = `
    <div class="card w-96 bg-base-600 shadow-xl">
                <div class="card-body ">
                    <h6 class="card-subtitle mb-2 text-center font-bold text-2xl">Kanye Quotes</h6>
                    <p class="card-text text-xl">${quote.quote} </p>
                <div class="card-actions justify-center">
      <button onclick="loadData();" class="btn btn-primary mt-5">New Quote</button>
    </div>
    </div>
            </div>
    `
}
loadData();