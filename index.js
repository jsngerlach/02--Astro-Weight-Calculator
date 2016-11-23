var planets = [
    { planet: 'Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];

//1. How to dynamically generate the select element

function roundToDecimal(num,dec) {
      var rounded = (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec));
      return rounded;
    }

for (var i = 0; i < planets.length; i++) {
    var planet = planets[i];

    var optionElement = document.createElement('option'); //creates planet list elements
    optionElement.value = planet.gravity;
    optionElement.innerHTML = planet.planet;

    var selectElement = document.getElementById('selectPlanet'); //adds planets list elements to list
    selectElement.appendChild(optionElement);

    //2. Bind a function to the click event
    var button = document.getElementById('calculateWeight');

    button.onclick = function() {
        var inputWeight = document.getElementById('inputWeight');

        var weight = inputWeight.value;

        var selectElement = document.getElementById('selectPlanet');

        var selectedIndex = selectElement.selectedIndex;

        var selectedOption = selectElement.options[selectedIndex];

        var planetName = selectedOption.text;
        var planetValue = selectedOption.value;

        var userWeightOnPlanet = roundToDecimal(weight * planetValue, 3);

        var message = 'If you were on the celestial object called ' + planetName + ', you would weigh ' + userWeightOnPlanet + 'lbs. of MUSCLE, STEEL and/or SEX APPEAL!';

        var messageError = 'Numbers Only!';

        var output = document.getElementById('output');

       

        if (isNaN(weight) || weight==''){
            output.innerHTML = messageError;
        }else{
            output.innerHTML = message;
        }

        
    }


}