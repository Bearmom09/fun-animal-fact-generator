function generateFact(event) {
  event.preventDefault();

  new Typewriter("#fun-fact", {
    strings: "bla bla bla bla bla bla bla bla bla bla bla bla",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let factFormElement = document.querySelector("#fact-generator");
factFormElement.addEventListener("submit", generateFact);
