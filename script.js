let currentLight = 0;

function changeLight() {
  const lights = ['red', 'yellow', 'green'];
  const lightElements = lights.map(id => document.getElementById(id));

  lightElements.forEach(light => light.classList.remove('red', 'yellow', 'green'));

  currentLight = (currentLight + 1) % lights.length;
  lightElements[currentLight].classList.add(lights[currentLight]);
}