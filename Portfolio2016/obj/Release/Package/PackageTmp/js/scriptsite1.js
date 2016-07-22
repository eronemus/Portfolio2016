
$(document).ready(function(){


$("#mybutton").click(function(event){
 event.preventDefault();	

 //get input value
	var numberentered = parseInt($("#input").val());
       var numberentered2 = parseInt($("#input2").val());
       var numberentered3 = parseInt($("#input3").val());
       var numberentered4 = parseInt($("#input4").val());
       var numberentered5 = parseInt($("#input5").val());       
//Pass value into array
       var myArr = []
       myArr.push(numberentered);
       myArr.push(numberentered2);
       myArr.push(numberentered3);
       myArr.push(numberentered4);
       myArr.push(numberentered5);




       console.log(myArr);


var lowest =  Math.min.apply(Math, myArr);
  $("#lowest").append(lowest);   

  console.log(lowest);

var highest = Math.max.apply(Math, myArr);
 $("#greatest").append(highest);     

 console.log(highest);  

var mean = 0;
 for(var i=0; i < myArr.length; i++){
mean = mean + myArr[i];}

mean = mean/myArr.length;

 $("#mean").append(mean);

 console.log(mean);

var sum = 0;
 for(var i = 0; i < myArr.length; i++){
       sum = sum + myArr[i];
}
 $("#sum").append(sum);

 console.log(sum);


var product = 1;
for(var i=0; i < myArr.length; i++){

       product = product * myArr[i];
}
$("#product").append(product);

console.log(product);

});



$("#mybuttons2").click(function(event){
 event.preventDefault();    

var numberentered = parseInt($("#inputs2").val());

console.log(numberentered);

var input = numberentered;
var output;

for(var i = input; i > 0; i--){
input = input * i-1;

};
$("#outputs2").append(input);

console.log(input);

});




$("#mybuttons3").click(function(event){
event.preventDefault();

var fizzNumber = parseInt($("#inputs3").val());
var buzzNumber = parseInt($("#inputs3_2").val());


       console.log(fizzNumber);
       console.log(buzzNumber);

       //function fizzBuzz(fizzNumber, buzzNumber){
       var output =1;
       for(var i=1;i<=100;i++){
              output = '';
              if(i%fizzNumber === 0){
                     output+='\n Fizz';
              } 
              if(i%buzzNumber === 0){
                     output+='\nBuzz';
              } 
              if(i%fizzNumber !== 0 && i%buzzNumber !== 0) {
                     output += '\n' + i;
              }

              $("#outputs3").append(output)
              
              console.log(output);
       }


});



$("#mybuttons4").click(function(event){
 event.preventDefault();

var wordentered = $("#inputs4").val();

var str = wordentered;



       str = str.toLowerCase();

       originalStr = str;

       str = str.split('');
       str = str = str.reverse();
       str = str.join('');

       var reverseStr = str;

       console.log(originalStr);
       console.log(reverseStr);

       
              if(originalStr === reverseStr){
              $("#outputs4").append("That's a palindrome!");
       }
       else
              {$("#outputs4").append("Sorry, not a palindrome!");
}

});
		

	
});

