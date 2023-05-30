

const text = "Welcome to Whimsy Wear, where fashion meets fantasy! <br> Unleash your inner style maven with our enchanting collection <br> of trendy apparel and accessories. Step into a world of whimsical designs, vibrant colors, and daring fashion statements. From magical dresses to spellbinding accessories, we curate the perfect blend of charm and elegance. <br> Let your imagination run wild and embrace your unique fashion journey with Whimsy Wear.  Get ready to turn heads, make a statement, and embrace your individuality.  Experience fashion like never before with Whimsy Wear.";
const delay = 10; // Delay between each character in milliseconds

function slowPrint(text, delay) {
  const container = document.getElementById("text-container");
  const lines = text.split("<br>");
  let index = 0;

  function printNextLine() {
    if (index < lines.length) {
      const line = lines[index];
      let charIndex = 0;

      function printNextCharacter() {
        if (charIndex < line.length) {
          container.innerHTML += line.charAt(charIndex);
          charIndex++;
          setTimeout(printNextCharacter, delay);
        } else {
          container.innerHTML += "<br>";
          index++;
          printNextLine();
        }
      }

      printNextCharacter();
    }
  }

  printNextLine();
}

slowPrint(text, delay);


