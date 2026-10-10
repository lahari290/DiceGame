
// if(randomNum==1){
// Img1="/AllWebProjects/1.png"
// }
// else if(randomNum==2){
// Img1="/AllWebProjects/2.png" 
// }
// else if(randomNum==3){
//  Img1="/AllWebProjects/3.png" 
// }
// else if(randomNum==4){
// Img1="/AllWebProjects/4.png" 
// }
// else if(randomNum==5){
// Img1="/AllWebProjects/5.png" 
// }
// else if(randomNum==6){
//  Img1="/AllWebProjects/6.png" 
// }
// else{
// Img1="/AllWebProjects/6.png"
// }


// OR use this below instead of if else
 // var Img1="/AllWebProjects/"+randomNum+".png";

 //  console.log("this is the test"+Img1); 

//   var Img2;


// if(randomNum2==1){
// Img2="/AllWebProjects/1.png"
// }
// else if(randomNum2==2){
// Img2="/AllWebProjects/2.png" 
// }
// else if(randomNum2==3){
//  Img2="/AllWebProjects/3.png" 
// }
// else if(randomNum2==4){
// Img2="/AllWebProjects/4.png" 
// }
// else if(randomNum2==5){
// Img2="/AllWebProjects/5.png" 
// }
// else if(randomNum2==6){
//  Img2="/AllWebProjects/6.png" 
// }
// else{
// Img2="/AllWebProjects/6.png"
// }


function Change(){
    
        {

            var randomNum1 = Math.random();
            randomNum1 = Math.floor(randomNum1*6)+1; // 1, 2, 3, 4, 5, 6
            var Img1="./"+randomNum1+".png";
            

            var randomNum2 = Math.random();
            randomNum2 = Math.floor(randomNum2*6)+1;
            var Img2="./"+randomNum2+".png";
            
var Text;

        if(randomNum1>randomNum2){
     Text = "Hurray! Player1 wins!!"; 
        }
        else if(randomNum1<randomNum2){
                Text = "Hurray! Player2 wins!!"; 
        }
      else{
        Text= "Well, well well, we have a tie here! Draw!!"; 
       }


           document.querySelector('h1').innerHTML=Text;
           document.querySelector('button').innerHTML="Cick Me Again To Play!";
           document.querySelector("#Player1Img").src= Img1;
           document.querySelector("#Player2Img").src= Img2;
          
        }
}




