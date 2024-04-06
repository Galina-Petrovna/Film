const createLiistTrailers = (parrent, srcList) => {
    const trailersList = document.createElement('ul');
    trailersList.classList.add('trailers__list');
    parrent.append(trailersList)
}


/**
 * <ul class="trailers__list">
          <li class="trailers__item">
            <div class="trailers__wrapper">
              <iframe class="trailers__video" src="https://www.youtube.com/embed/zCFxadhcJTw" title="YouTube video player" frameborder="0"></iframe>
            </div>
          </li>
        </ul>
 */

const init = () => {
    const trailersContainer = document.querySelector('.trailers__container');
    const trailersButtons = document.querySelectorAll('.trailers__button');
    
    const srcList = [];

    createLiistTrailers(trailersContainer, srcList);
    
    trailersButtons.forEach((btn, i) => {
        srcList.push(btn.dataset.src)

        btn.addEventListener('click', () => {
            trailersButtons.forEach(tBtn => {
                if (tBtn === btn) {
                    tBtn.classList.add('trailers__button_active')
                } else {
                    tBtn.classList.remove('trailers__button_active')
                }
            });
        });
    });
    console.log(srcList);
};

init ();
