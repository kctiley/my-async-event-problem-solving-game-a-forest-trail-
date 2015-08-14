(function() {
  var userStatus = {
    energy: 100,
    steps: 0
  };

  var status = document.getElementById("status");
  function updateDom() {
    status.innerHTML = "";
    for(key in userStatus) {
      status.innerHTML = status.innerHTML + "<div>" + key + ": " + userStatus[key] + "</div>";
    }
  }

  // get the walk button
  var walkBtn = document.getElementById('walk-trail');
  // add event listener to the walk button
  walkBtn.addEventListener('click', function() {
    // when clicked, set disabled
    walkBtn.setAttribute('disabled', 'true');
    // after 3 seconds, set to be enabled/remove disabled
    setTimeout(function() {
      walkBtn.removeAttribute('disabled');
    }, 1000);
    // increase the steps in the userStatus by 1
    userStatus.steps += 1;
    // display text on left side about walking
    // creates a new div
    var walkingText = document.createElement('div');
    // puts the text inside of that div
    walkingText.innerHTML = "you continue down the trail";
    // puts the new div onto the dom in the left side
    document.getElementById("left").appendChild(walkingText);

    if (userStatus.steps % 10 === 0) {
      // create a new button
      var berryBtn = document.createElement('button');
      // assign it an id
      berryBtn.id = "pick-berries"
      // set the text
      berryBtn.innerHTML = "pick berries";
      // append it to the middle div
      document.getElementById("middle").appendChild(berryBtn);

      berryBtn.addEventListener('click', function() {
        var berriesCount =  Math.floor(Math.random() * (10 - 1) + 1);
        userStatus.berries ? userStatus.berries += berriesCount : userStatus.berries = berriesCount;
        updateDom();
        var berriesText = document.createElement('div');
        // puts the text inside of that div
        berriesText.innerHTML = "you picked " + berriesCount + " berries";
        // puts the new div onto the dom in the left side
        document.getElementById("left").appendChild(berriesText);
        document.getElementById("middle").removeChild(berryBtn);
      });
    }



    if (userStatus.steps % 20 === 0) {
      // create a new button
      var waterBtn = document.createElement('button');
        // assign it an id
      waterBtn.id = "drink-water"
        // set the text
      waterBtn.innerHTML = "look for water";
        // append it to the middle div
      document.getElementById("middle").appendChild(waterBtn);
      waterBtn.addEventListener('click', function() {       
        (function() {
          if (Math.random() > 0.5){          
            waterFind = "did";
            var waterIncreaseBy = 1;            
            }
          else
            {waterFind = "did not";
            waterIncreaseBy = 0;}

          userStatus.water ? userStatus.water += waterIncreaseBy : userStatus.water = waterIncreaseBy;
        })();
   
      var waterText = document.createElement('div');
        // puts the text inside of that div
      waterText.innerHTML = "you " + waterFind + " find water";
        // puts the new div onto the dom in the left side
      document.getElementById("left").appendChild(waterText);
      document.getElementById("middle").removeChild(waterBtn);
      });
    }





    if (userStatus.steps % 1 === 0) {

      userStatus.energy -= Math.floor(Math.random() * (10 -1 + 1)); 
    }






    updateDom();
  });

  // update the dom on pageload
  updateDom();
})();

