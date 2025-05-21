// Changing the Text Content

// Here, she selects the desired heading element by its id using document.getElementById(). 
const appearanceHeading = document.getElementById('facts__heading');

// Then, she sets its textContent attribute to 'Qualities and Traits of a Crab'.
appearanceHeading.textContent = 'Qualities and Traits of a Crab';

////////////////////////
// Changing Appearance//
////////////////////////

// Then, she can select the important fact element and add this new class to the element:
const importantFact = document.getElementById('facts__fact--important');

// className is an attribute, not a method.
// Note that she set importantFact.className to a string that interpolates the existing importantFact.className value! 
importantFact.className = `${importantFact.className} highlight`;

///////////////////////////
// Creating a New Element//
///////////////////////////

const newAppearanceFact = document.createElement('li');

newAppearanceFact.textContent = 'covered in sand (when on a sandy beach)';

const appearanceList = document.getElementById('facts__list');

appearanceList.appendChild(newAppearanceFact);