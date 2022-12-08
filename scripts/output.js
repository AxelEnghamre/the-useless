// output js
// run index 2
const output = () => {
  // get the current feeling object from the select
  const feeling = feelings[select.value];

  const p = document.createElement('p');
  p.textContent = `you are feeling ${feeling.feeling}`;

  if (feeling.feeling === 'challenged') {
    // set the color
    //p.style.color = 'transparent';
    p.style.background = feeling.color;
    p.style.webkitBackgroundClip = 'text';
    p.style.webkitTextFillColor = 'transparent';
    //p.style.textFillColor = 'transparent';

    // set the rotation
    if (main.hasChildNodes()) {
      const lastP = main.lastChild;
      const lastPTransform = lastP.style.transform;
      const lastPTransformValues = lastPTransform.match(/\d+/g);
      const lastPDeg = parseInt(lastPTransformValues[4]);

      p.style.transform = `rotate3d(0, 0, 1, ${lastPDeg + 1}deg)`;
    } else {
      // start the rotation
      p.style.transform = 'rotate3d(0, 0, 1, 0deg)';
    }
  } else {
    p.style.color = feeling.color;
  }
  main.append(p);
};
