// Remove the <main> element with id 'main'
document.getElementById('main').remove();

// Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Jerry is the champion';

document.body.append(newHeader);

// Make newHeader globally accessible for tests
window.newHeader = newHeader;