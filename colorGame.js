var zero;
var first;
var third;
var initialTimeConditionAssigner, afterTimeConditionAssigner;
var h1, h2;
var gameButton, anyButton;
var colorRandom, gameColor;

initialTimeConditionAssigner = Math.floor(Math.random() * 6) + 2;
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
          while (initialTimeConditionAssigner === afterTimeConditionAssigner) {
                    initialTimeConditionAssigner = Math.floor(Math.random() * 6) + 2;
          }

          for (var i = 2; i < 8; i++) {
                    colorRandom = colorDeclare();

                    anyButton = document.getElementsByTagName("button")[i];
                    anyButton.style.background = "rgb(" + colorRandom + ")";

                    if (i === initialTimeConditionAssigner) {
                              gameColor = colorRandom;
                              h1.textContent=  "rgb(" + gameColor + ")";
                              h1.style.background = gameColor;
                              gameButton = i;

                              console.log(gameButton);
                    }



          }
          //console.log(initialTimeConditionAssigner);
}






function colorAssigner2() {
          var div;
          h1 = document.querySelector("h1");
          h2 = document.querySelector("h2");
          initialTimeConditionAssigner = Math.floor(Math.random() * 3) +2 ;
          while (initialTimeConditionAssigner === afterTimeConditionAssigner) {
                    initialTimeConditionAssigner = Math.floor(Math.random() * 6) + 2;
          }

          for (var i = 2; i < 5; i++) {
                    colorRandom = colorDeclare();

                    anyButton = document.getElementsByTagName("button")[i];
                    anyButton.style.background = "rgb(" + colorRandom + ")";

                    if (i === initialTimeConditionAssigner) {
                              gameColor = colorRandom;
                              h1.style.background = gameColor;
                              h1.textContent=  "rgb(" + gameColor + ")";
                              gameButton = i;

                              console.log(gameButton);
                    }



          }
          //console.log(initialTimeConditionAssigner);
}



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
for (var i = 0; i < 8; i++) {
          buttons[i].onclick = function() {
                    button = this.value;

                    clicked(this.value);
          };
}

var level;

function clicked(value) {

          if (value == gameButton) {

                    if (level == "easy") {
                              for (var i = 2; i < 5; i++) {
                                        buttons[i].style.visibility = "visible";
                              }
                              initialTimeConditionAssigner = Math.floor(Math.random() * 6) + 2;
                              h1.style.background = "rgb(" + gameColor + ")";
                              colorAssigner2();
                    } else if (level == "hard") {
                              for (var i = 2; i < 8; i++) {
                                        buttons[i].style.visibility = "visible";
                              }
                              initialTimeConditionAssigner = Math.floor(Math.random() * 6) + 2;
                              h1.style.background = "rgb(" + gameColor + ")";
                              colorAssigner();
                    }

          } else if (value == "easy") {
                    level = "easy";
                    colorAssigner2();
                    buttons[5].style.visibility = "hidden";
                    buttons[6].style.visibility = "hidden";
                    buttons[7].style.visibility = "hidden";

          } else if (value == "hard") {
                    level = "hard";
                    buttons[5].style.visibility = "visible";
                    buttons[6].style.visibility = "visible";
                    buttons[7].style.visibility = "visible";
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
