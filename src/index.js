function displayFunFact(response) {
  new Typewriter("#fun-fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ta4fa299a6f9403bo6f20f088f5ac04c";
  let prompt = `Please generate a fun-fact about ${instructionsInput.value}`;
  let context =
    "You are an expert on animals. please display your one best fun-fact in basic HTML and make sure to seperate each line with a <br />. Please sign the fun-fact with `SheCodes AI` inside a <strong> element after the fun-fact";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayFunFact);
}

let factFormElement = document.querySelector("#fact-generator");
factFormElement.addEventListener("submit", generateFact);
