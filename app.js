"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchResults = searchByMultipleTraits(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

function searchByMultipleTraits(traits){
  let firstTrait = promptFor("What trait would you like to search by? (gender, dob, height, weight, eye color, occupation", autoValid);
  let foundTrait = traits.filter(function(potentialMatch){
    if(potentialMatch.firstTrait === eyeColor){
      return searchByEyeColor(); 
    }
    // else(potentialMatch.firstTrait === gender){
    //   return searchByGender();
    })
    return foundTrait;
  }
  
  //How do we return the function that the user is inputting.  If they are looking for blue eyes, how do we run the search by eye color
// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = promptFor("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person single person object using the name they entered.
  return foundPerson;
}

//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color?", autoValid);
  let foundEyeColor = people.filter(function(potentialMatch){
    if(potentialMatch.eyeColor === eyeColor){
      return true;
    } 
    else {
      return false;
    }
  })
  return displayPeople(foundEyeColor);
}

function searchByGender(people){
  let gender = promptFor(("What is the person's gender? male or female"), autoValid);
  let foundGender = people.filter(function(potentialMatch){
    if(potentialMatch.gender === gender){
      return true;
    }
    else {
      return false;
    }
  })
  return displayPeople(foundGender);
}

function searchByDob(people){
  let dateOfBirth = promptFor("Do you know the person's date of birth? (xx/xx/xxxx)", autoValid);
  let foundDateOfBirth = people.filter(function(potentialMatch){
    if(potentialMatch.dateOfBirth === dateOfBirth){
      return true;
    }
    else {
      return false;
    }
  })
  return displayPeople(foundDateOfBirth);
}

function searchByHeight(people){
  let height = parseInt(promptFor("What is the person's height (inches)", autoValid));
  let foundHeight = people.filter(function(potentialMatch){
    if(potentialMatch.height === height){
      return true;
    }
    else {
      return false;
    }
  })
  return displayPeople(foundHeight);
}

function searchByWeight(people){
  let weight = parseInt(promptFor(("What is the person's weight (exact lbs)"), autoValid));
  let foundWeight = people.filter(function(potentialMatch){
    if(potentialMatch.weight === weight){
      return true;
    }
    else {
      return false;
    }
  })
  return displayPeople(foundWeight);
}

function searchByOccupation(people){
  let occupation = promptFor(("What is the person's occupation"), autoValid);
  let foundOccupation = people.filter(function(potentialMatch){
    if(potentialMatch.occupation === occupation){
      return true;
    }
    else {
      return false;
    }
  })
  return displayPeople(foundOccupation);
}

function searchByParents(people){
  let parents = promptFor(("Who is this person's parents?"), autoValid);
  let foundParents = people.filter(function(potentialMatch){
    if(potentialMatch.parents === parents){
      return true;
    }
    else {
      return false;
    }
  })
  return displayPeople(foundParents);
}

function searchByCurrentSpouse(people){
  let spouse = parseInt(promptFor(("Who is this person's spouse?"), autoValid));
  let foundSpouse = people.filter(function(potentialMatch){
    if(potentialMatch.spouse === spouse){
      return true;
    }
    else {
      return false;
    }
  })
  return displayPeople(foundSpouse);
}

//TODO: add other trait filter functions here.

// Creat a function that searches multiple traits 
// That function then steps into our indivdial trait functions
// dispaly people who share those trait
// Prommpt "is this any of the people you are looking for"
// If yes, the variable searchResults becomes the name of the person who typed in
// If no, return false and reurns the search process 



// First, the user inputs the trait(s) they want to search for
// Next, the user input the search term they want to use (brown)
// Finally, use the filter method to return all the results whose chosen trait matches the search term
// You may or may not end up console logging these results. You could do this to help the dev process, 
// but ideally you will want to display these in an alert for the user


//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display.
  alert(personInfo);
}

//#endregion



//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).




function promptFor(question, valid){
  let response;
  let isValid;
  do{
    response = prompt(question).trim();
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion

"use strict"

