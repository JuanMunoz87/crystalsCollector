
   
   // set variables
   let playerScore = 0;
   let wins = 0;
   let loses = 0;
   let stopGame = false;

   // random number between 19 - 120
   let gameNumber = Math.floor(Math.random() * 11) + 5;       
   $("#game-number").append(gameNumber);

   // random number between 1 - 12
   let crystalNumber1 = Math.floor(Math.random() * 5) + 1;
   let crystalNumber2 = Math.floor(Math.random() * 5) + 1;   
   let crystalNumber3 = Math.floor(Math.random() * 5) + 1;   
   let crystalNumber4 = Math.floor(Math.random() * 5) + 1;          

   // adding the random numbers to each and individual crystal
   $("#crystals .crystal1").attr("value", crystalNumber1);
   $("#crystals .crystal2").attr("value", crystalNumber2);
   $("#crystals .crystal3").attr("value", crystalNumber3);
   $("#crystals .crystal4").attr("value", crystalNumber4);
   
   $(document).ready(function () {
   // on click event 
   $(".crystalBox").on("click", function() {

      let imageBoxValue = $(this).attr("value");
      imageBoxValue = parseInt(imageBoxValue)
      console.log(imageBoxValue);

      // Every click, from every crystal adds to the global counter. 
      playerScore += imageBoxValue;
   //   console.log(playerScore);
      $("#score").text(playerScore);

      if(gameNumber === playerScore) {
         wins++;
         $("#wins").text(wins);
         console.log("You win!");
       //  stopGame = true;
      } else if(gameNumber !== playerScore) {
         loses++;
         $("#loses").text(loses);
         console.log("You loose");
      // stopGame = true;
      }


   });

});