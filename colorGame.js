var zero;
var first;
var third;
var anyTimeConditionAssigner;
var h1, h2;
var gameButton, anyButton;
var color;

anyTimeConditionAssigner = Math.floor(Math.random() * 6);

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


          for (var i = 0; i < 6; i++) {
                    color = colorDeclare();

                    anyButton = document.getElementsByTagName("button")[i];
                    anyButton.style.background = "rgb(" + color + ")";
                    if (i === anyTimeConditionAssigner) {
                              h1.textContent = "rgb(" + color + ")";
                              gameButton = document.getElementsByTagName("button")[i];
                              console.log(gameButton);
                              console.log("i:"+i);
                    }


          }


          gameButton.addEventListener("click", colorAssigner());
          gameButton.addEventListener("click", function() {
                    h1.style.background = "rgb(" + color + ")";
                    anyTimeConditionAssigner = Math.floor(Math.random() * 6);
          });
          // gameButton.addEventListener("click", function() {
          //           alert("");
          // });
}
colorAssigner();
for (var i = 0; i < 6; i++) {
          //anyButton[i].addEventListener("click",function(){alert("clicked")});
}
