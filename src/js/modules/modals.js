const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelector(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelector('[data-modal]'),
              scroll = calcScroll();
              console.log(trigger)
              console.log(modal)
              console.log(close)
              console.log(windows)

        trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.style.display = 'none';
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });

        close.addEventListener('click', () => {
            windows.style.display = 'none';

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.style.display = 'none';

                modal.style.display = "none";
                document.body.style.overflow = ""; 
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '600px';
        div.style.height = '600px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.header__buttons-query', '.modal__wrapp', '.modal__input__tittle__close');
};

export default modals;