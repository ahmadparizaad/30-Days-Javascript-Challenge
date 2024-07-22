// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Check if the element exists before manipulating
    const titleElement = document.getElementById('title');
    const demo = document.getElementById('demo');
    if (titleElement) {
        titleElement.innerHTML = 'Title: Baal e Jibreel';
        demo.remove();
    }

    const bookElement = document.getElementById('book');
    if (bookElement) {
        bookElement.style.backgroundColor = '#B4E380';
    }

    const newDiv = document.createElement('div');
    newDiv.textContent = "Baal e Jibreel is one of the best books of Allama Iqbal.";
    document.body.appendChild(newDiv);
    newDiv.style.backgroundColor = 'skyblue';

    const newListItem = document.createElement('li');
    newListItem.textContent = 'Mirza Ghalib';
    const listElement = document.getElementById('list');
    if (listElement) {
        listElement.appendChild(newListItem);
        // Uncomment if needed
        // list.removeChild(list.lastChild);
    }

    const imageElement = document.getElementById('ai');
    if (imageElement) {
        imageElement.setAttribute('src', 'https://imgs.search.brave.com/czHY7FQytZwFCBHA3-4MlJfnGYAkTUIoHYdUt7pMH1c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnJhbmRzeW5hcmlv/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/QWxsYW1hLUlxYmFs/MS5qcGc');
        imageElement.classList.add('writer-image');
        imageElement.classList.remove('poet-image');
    }

    const buttonElement = document.getElementById('btn');
    if (buttonElement) {
        buttonElement.addEventListener('click', function() {
            const paraElement = document.getElementById('para');
            if (paraElement) {
                paraElement.innerHTML = 'Iqbal’s poetry is considered some of the greatest of the 20th century. His works are characterized by themes of Islamic philosophy, mysticism, and the quest for self-realization. He wrote extensively in both Urdu and Persian, and his poetry is known for its depth, complexity, and beauty.';
            }
        });
    }

    imageElement.addEventListener('mouseover', function(){
        imageElement.style.borderColor = 'red';
        imageElement.style.borderWidth = '5px';
    })
    imageElement.addEventListener('mouseout', function(){
        imageElement.style.borderColor = 'black';
    })
});
