function showImage(letter) {
  console.log(`Button ${letter} clicked!`); 

  const container = document.getElementById(`${letter}-container`);

  // Define file paths for the images
  const images = {
    A: "assets/img/css-letter-a.png",
    B: "assets/img/css-letter-b.png",
    C: "assets/img/css-letter-c.png",
  };

  
  container.innerHTML = "";

  
  const img = document.createElement("img");
  img.src = images[letter];
  img.alt = `CSS Feature: ${letter}`;
  container.appendChild(img);

  // Create the hide button
  const hideButton = document.createElement("button");
  hideButton.innerText = "Hide Result";
  hideButton.className = "hide-button";
  hideButton.onclick = () => {
    container.innerHTML = "";
  };
  container.appendChild(hideButton);

    container.style.display = "block";

}
