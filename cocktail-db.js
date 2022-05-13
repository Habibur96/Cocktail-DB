
const loadCocktail = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayCocktailName(data.drinks))
}

loadCocktail()

const displayCocktailName = data => {
    console.log(data[0])
    const cocktailName = document.getElementById('cocktailName')
    data.forEach(info => {
        console.log(data[0].strDrink)
        const div = document.createElement('div')
        // div.innerHTML =
        //     `<h5>${info.strDrink}</h5>
        // <h5>${info.idDrink}</h5>
        // <h5>${info.strAlcoholic}</h5>
        // <h5>${info.strCategory}</h5> 
        // <h5>${info.strGlass}</h5> <br>`;

        cocktailName.appendChild(div)

    })
}


// ==============================================================


const searchCocktail = () => {
    const search = document.getElementById('input');
    const value = search.value
    search.value = ''

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)


        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayCocktail(data.drinks))

}

const displayCocktail = data => {
    console.log(data[0])
    const cocktail = document.getElementById('card')
    data.forEach(info => {

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `

                <div class="card ">
                    <img src="${info.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${info.strDrink}</h5>
                        <p class="card-text">${info.strInstructionsDE.slice(0, 40)}</p>
                    </div>
                </div>
            
        
       
        `
        cocktail.appendChild(div)

    });
}



