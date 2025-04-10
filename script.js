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

function displayCharacters(page) {
    const container = document.getElementById('characters-container');
    const start = (page - 1) * charactersPerPage;
    const end = start + charactersPerPage;
    const paginatedCharacters = characters.slice(start, end);

    container.innerHTML = '';

    paginatedCharacters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${character.image ? character.image : (character.images && character.images.length > 0 ? character.images[0] : 'https://i.ibb.co/Lk2L4bV/errorimg.jpg')}" alt="${character.name}" onerror="this.src='https://i.ibb.co/Lk2L4bV/errorimg.jpg';">
            <div class="character-info">
                <h3>${character.name}</h3>
                <p>Clan: ${validField(character.clan, character.personal?.clan)}</p>
                <p>Aldea: ${validField(character.village, Array.isArray(character.personal?.affiliation) ? character.personal.affiliation[0] : character.personal?.affiliation)}</p>
                <p>Tipo de Chakra: ${extraInfo(character)}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function validField(field, fallback) {
    if (field && typeof field === 'string' && field.toLowerCase() !== 'unknown') {
        return field;
    }
    if (fallback && typeof fallback === 'string' && fallback.toLowerCase() !== 'unknown') {
        return fallback;
    }
    return 'Sin información';
}

