// SELECTIONS DES BOUTON ---------------------------------------------

    // Bouton PREPARATION
const prepaButtonBox = document.querySelector('#preparation_title_box');
const prepaButtonTitle = document.querySelector('#preparation_title');
const prepaButtonBoxSelect = document.querySelector('#preparation_title_box_select');
const prepaButtonTitleSelect = document.querySelector('#preparation_title_select');

    // Bouton INGREDIENTS
const ingreButtonBox = document.querySelector('#ingredients_title_box');
const ingreButtonTitle = document.querySelector('#ingredients_title');
const ingreButtonBoxSelect = document.querySelector('#ingredients_title_box_select');
const ingreButtonTitleSelect = document.querySelector('#ingredients_title_select');

// SELECTION DES SIDES ----------------------------------
    // SIDE PREPARATION
const PrepaSide = document.querySelector('.preparation_box');

    // SIDE INGREDIENTS
const IngreSide = document.querySelector('.ingredients_box');





// gestion des évènement au click 

prepaButtonBox.addEventListener("click", function(){
    PrepaSide.style.display ="block";
    IngreSide.style.display ="none";

    prepaButtonBoxSelect.style.display ="block";
    prepaButtonTitleSelect.style.display ="block";
    ingreButtonBoxSelect.style.display ="none";
    ingreButtonTitleSelect.style.display ="none"

    prepaButtonBox.style.display ="none";
    prepaButtonTitle.style.display ="none";
    ingreButtonBox.style.display ="block";
    ingreButtonTitle.style.display ="block";
    });

ingreButtonBox.addEventListener("click", function(){
    PrepaSide.style.display ="none";
    IngreSide.style.display ="block";

    prepaButtonBoxSelect.style.display ="none";
    prepaButtonTitleSelect.style.display ="none";
    ingreButtonBoxSelect.style.display ="block";
    ingreButtonTitleSelect.style.display ="block";

    prepaButtonBox.style.display ="block";
    prepaButtonTitle.style.display ="block";
    ingreButtonBox.style.display ="none";
    ingreButtonTitle.style.display ="none";
    


    });




