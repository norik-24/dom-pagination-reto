let characters = [];
let currentPage = 1;
const charactersPerPage = 4;

async function fetchCharacters() {
    try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        const data = await response.json();
        characters = data.characters.slice(0, 20); // Get only first 20 characters
        displayCharacters(currentPage);
        setupPagination();
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

