var zero;
var first;
var third;
var initialTimeConditionAssigner,afterTimeConditionAssigner;
var h1, h2;
var gameButton, anyButton;
var colorRandom, gameColor;

initialTimeConditionAssigner = Math.floor(Math.random() * 6);
afterTimeConditionAssigner = initialTimeConditionAssigner;
function colorDeclare() {
          zero = Math.floor(Math.random() * 256);
          first = Math.floor(Math.random() * 256);
          third = Math.floor(Math.random() * 256);

          return zero + "," + first + "," + third;

}

function colorAssigner() {
          var div;
          h1 = document.querySelector("h1");
          h2 = document.querySelector("h2");
          while(initialTimeConditionAssigner===afterTimeConditionAssigner){
                    initialTimeConditionAssigner = Math.floor(Math.random() * 6);
          }

          for (var i = 0; i < 6; i++) {
                    colorRandom = colorDeclare();

                    anyButton = document.getElementsByTagName("button")[i];
                    anyButton.style.background = "rgb(" + colorRandom + ")";

                    if (i === initialTimeConditionAssigner) {
                              gameColor = colorRandom;

                              gameButton = i;

                              console.log(gameButton);
                    }



          }
          //console.log(initialTimeConditionAssigner);
}
colorAssigner();


//
// if (gameButton.clicked == true) {
//
// }
//

//
//
// gameButton.addEventListener("click",function(){});
//
//





var buttons = document.getElementsByTagName("button");
var button;
for (var i = 0; i < 6; i++) {
          buttons[i].onclick = function() {
                    button = this.value;

                    clicked(this.value)
          };
}

function clicked(value) {

          if (value == gameButton) {

                    for (var i = 0; i < 6; i++) {
                              buttons[i].style.visibility = "visible";
                    }
                    initialTimeConditionAssigner = Math.floor(Math.random() * 6);
                    h1.style.background = "rgb(" + gameColor + ")";
                    colorAssigner();


          } else {
                    buttons[value].style.visibility = "hidden";
          }

}




// initialTimeConditionAssigner = Math.floor(Math.random() * 6);
// while(initialTimeConditionAssigner===afterTimeConditionAssigner){
//           initialTimeConditionAssigner = Math.floor(Math.random() * 6);
//
//           }
// console.log($(this).val());
// gameButton=null;
//
// h1.style.background = "rgb(" + gameColor + ")";
// colorAssigner();


//
// gameButton.addEventListener("click",clicked);
//
//









//           anyTimeConditionAssigner = Math.floor(Math.random() * 6);
//           h1.style.background = "rgb(" + color + ")";
//           colorAssigner();
// });
