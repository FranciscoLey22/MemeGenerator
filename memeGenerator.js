//select the form in the DOM
const meme = document.querySelector('#memeMaker');
//create variables from the DOM input values
// for the meme image
const urlImage = document.querySelector('input[name="url"]');
// for the top text
const topText = document.querySelector('input[name="topText"]');
//for the bottom text
const bottomText = document.querySelector('input[name="bottomText"]');
//for the section to add memes to
const results = document.querySelector('#memes');


//Add an event listener to the HTML submit(i.e. "add meme") button
meme.addEventListener('submit', function(e){
    e.preventDefault();
//using the function below to create a meme upon a click
const newMeme = makeMeme(urlImage.value, topText.value, bottomText.value);
results.appendChild(newMeme);

//after a click, resetting the input values to an empty string
urlImage.value = '';
topText.value = '';
bottomText.value = '';
});

//the function below takes the inputs (image url, top text, bottom text) and 
//creates a new meme
function makeMeme(image, top, bottom){
    //div with the background image
    const div = document.createElement('div');
    div.classList.add("meme-style");
    div.style.backgroundImage = `url(${image})`;
    //div top text
    const divTop = document.createElement('div');
    divTop.classList.add("TopText");
    divTop.innerText = top;
    //div bottom text
    const divBottom = document.createElement('div');
    divBottom.classList.add("BottomText");
    divBottom.innerText = bottom;
    //adding the divs for the top and bottom text to the main image div
    div.appendChild(divTop);
    div.appendChild(divBottom);
    

    div.addEventListener('click', function(e){
        //Removing a to-do item by clicking the remove button
            if(e.target.className === "meme-style"){
                e.target.remove();
            } 

        });
//experiment//experiment//experiment//experiment//experiment//experiment//experiment//experiment//experiment//experiment
// //Hiding/deleting memes
// function hide(evt) {
//     evt.target.style.visibility = 'hidden';
//   }
  
//   // Attach the listener to the list
//   // It will fire when each <li> is clicked
//   div.addEventListener('click', hide, false);
// //experiment
//experiment//experiment//experiment//experiment//experiment//experiment//experiment//experiment//experiment//experiment


    //return the background image div with the top text and bottom text appended  
    return div;

}

