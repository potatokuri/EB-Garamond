function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

function toggleItalic() {
  const textElement = document.getElementById('tryme');
  if (textElement.style.fontStyle === 'normal') {
    textElement.style.fontStyle = 'italic';
  } else {
    textElement.style.fontStyle = 'normal';
  }
}

function fontWeight(weight) {
  const textElement = document.getElementById('tryme');
  switch (weight) {
    case 'medium':
      textElement.style.fontWeight = 500;
      break;
    case 'semibold':
      textElement.style.fontWeight = 600;
      break;
    case 'bold':
      textElement.style.fontWeight = 700;
      break;
    case 'extrabold':
      textElement.style.fontWeight = 800;
      break;
    default:
    case 'regular':
      textElement.style.fontWeight = 400;
      break;
  }
}

function fontSize(size) {
  document.getElementById('sliderValue').textContent = size; 
  const textElement = document.getElementById('tryme');
  textElement.style.fontSize = size + "px";
}


// Logic for background highlight transition
const headers = document.querySelectorAll('h2');

const observerOptions = {
  root: null, // Use viewport
  threshold: 0.5 // 50% of the header must be visible
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('highlight');
    } else {
      entry.target.classList.remove('highlight');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

headers.forEach(header => {
  observer.observe(header);
});
//--------------------------------------------

function addToGrid(text) {
  const gridContainer = document.querySelector('.grid-container');
  const gridItem = document.createElement('div');
  gridItem.className = 'grid-item';
  gridItem.textContent = text;
  gridContainer.appendChild(gridItem);
}


for (let i = 0; i < 26; i++) {
  const charLower = String.fromCharCode(97 + i); // a to z
  const charUpper = String.fromCharCode(65 + i); // A to Z
  addToGrid(`${charUpper}${charLower}`);
}
for (let i = 0; i < 10; i++) {
  addToGrid(i); // 0 to 9
}

for (let i = 33; i <= 47; i++) {
  addToGrid(String.fromCharCode(i)); // ! to /
}
for (let i = 58; i <= 64; i++) {
  addToGrid(String.fromCharCode(i)); // : to @
}
for (let i = 91; i <= 96; i++) {
  addToGrid(String.fromCharCode(i)); // [ to `
}
for (let i = 123; i <= 126; i++) {
  addToGrid(String.fromCharCode(i)); // { to ~
}