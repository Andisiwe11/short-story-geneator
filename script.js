let shortStoryFormElement = document.querySelector("#ShortStory-generator-form");
let buttonElement = document.querySelector("#user-instructions");

shortStoryFormElement.addEventListener("submit", generateShortStory);



function displayShortStory (response) {
    console.log("ShortStory Generated");
    new Typewriter('#ShortStory', {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",
      });
}


function generateShortStory(events) { 
    events.preventDefault(); 

    let instructionsInput = document.querySelector(".instructions").value;
    let apiKey = "fb256to5e808d0b23e3abf842fb7d00b";
    let prompt = `User instructions: Generate a Short Story ${instructionsInput}`;
    let context = "You are a romantic short story writer and love to  write short story .Your mission is to genetrate a 15 line short story in basic html .Make sure to follow th user instructions below.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    console.log("generatng short story");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

axios.get(apiUrl).then(displayShortStory);
      
    poemFormElement.innerHTML = instructionsInput;
}

