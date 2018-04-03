// z = (TempAtual - mediaTodas) / variacao

var $ = document.querySelector.bind(document);

var variation;

var temperatures = [];

var minTemp = getMediaValue() - variation;
var maxTemp = getMediaValue() - variation;
var tempVal;

var tempInterval = setInterval(() => {
   
   tempVal = Number($('#temp').value);
   variation = Number($('#variacao').value);
   minTemp = getMediaValue() - variation;
   maxTemp = getMediaValue() + variation;

   $('.temp').innerHTML = `
      <div>
         Min<br /> ${minTemp.toFixed(2)}
      </div>
      <div>
         Temperatura<br /> ${tempVal}
      </div>
      <div>
         Max<br /> ${maxTemp.toFixed(2)}
      </div>
   `;

   temperatures.push(tempVal);
   setBodyBackground();

   console.log(temperatures);

},1000);

function getMediaValue() {

   if (!temperatures.length) {
      return 0;
   }

   return temperatures.reduce((lastVal, actualVal) => lastVal + actualVal) / temperatures.length;

}

function setBodyBackground() {

   if (tempVal < minTemp || tempVal > maxTemp) {
      $('body').style.background = '#900';
   } else {
      $('body').style.background = '#090';
   }

}

window.addEventListener('load', () => {

   document.addEventListener('keydown', ev => {

      ev.preventDefault();

      if (event.keyCode == 38) {

         $('#temp').value = eval(`${$('#temp').value} + 1`);

      } else if (event.keyCode == 40) {
         
         $('#temp').value = eval(`${$('#temp').value} - 1`);

      } else if (event.keyCode == 37) {

         $('#variacao').value = eval(`${$('#variacao').value} - 1`);

      } else if (event.keyCode == 39) {

         $('#variacao').value = eval(`${$('#variacao').value} + 1`);

      }

   });

});