const pokemonsSelectList = document.querySelectorAll('.pokemon')
const pokemonsCards = document.querySelectorAll('.pokemon-card')

pokemonsSelectList.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const openCardPokemon = document.querySelector('.open')
        openCardPokemon.classList.remove('open')
        
        const selectIdPokemon = pokemon.attributes.id.value
        
        const pokemonCardIdToOpen = 'card-' + selectIdPokemon
        const pokemonCardToOpen = document.getElementById(pokemonCardIdToOpen)

        pokemonCardToOpen.classList.add('open')

        
    const activeListPokemon = document.querySelector('.active')
    activeListPokemon.classList.remove('active')

    const selectPokemonOnList = document.getElementById(selectIdPokemon)
    selectPokemonOnList.classList.add('active')

    })
})