import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        getResource('https://jsonplaceholder.typicode.com/posts?_limit=6')
            .then(res => createCards(res))
            .catch(error => console.log(error));
    });

    function createCards(response) {
        response.forEach(({title, body}) => {
            let card = document.createElement('div');

            card.classList.add('card__item');
        
            card.innerHTML = `
                    <img src="./assets/img/YourImagesHere.png" alt />
                    <div class="card__item__text">
                        <h3>bridge</h3>
                        <h4>${title}</h4>
                        <p>${body}</p>
                        <p>Posted by <span>Eugenia</span>, on July 24, 2019</p>
                    </div>
                    <button>Continue reading</button>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    };

};

export default showMoreStyles;