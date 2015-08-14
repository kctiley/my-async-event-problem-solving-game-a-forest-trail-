
(function() {
  var userStatus = {
    energy: 100,
    steps: 5
  };

  var status = document.getElementById("status");
  var energy = document.createElement('div');
  energy.innerHTML = "energy: " + userStatus.energy;
  var steps = document.createElement('div');
  steps.innerHTML = "steps: " + userStatus.steps;
  
  status.appendChild(energy);
  status.appendChild(steps);
})();