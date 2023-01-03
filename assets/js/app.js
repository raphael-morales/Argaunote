/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import '../css/app.scss';

// start the Stimulus application
import '../bootstrap';

function iteration () {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        boat.style.left = timePassed / 5 + 'px';

        if (timePassed > 8000) clearInterval(timer);

    }, 20);
}
window.requestAnimationFrame(iteration);