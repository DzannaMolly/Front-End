// function myFunctions(a, b, c)
// {	
// 	var result;
// 	result="";
	
// 	if (arguments.length==3)
// 	{
// 		if (c==true)
// 			result=a+b;
// 		else
// 			result=b+a;
// 	}
	
// 	return result
	
// }


// function randomValues (){

// var largest = 0;
// // var najgolem = 0;

// for (i=0;i<=10;i++){
// var randomGenerate = Math.random();

// if (randomGenerate > largest){
//     largest = randomGenerate;
// }else
// 	largest;

// }
// console.log("Largest");
// return largest;
// }



function sumSquares(){
	var number = 0;

	for (i=101;i<=150;i++){
		var squaresNum = Math.pow(i,2);
		number += squaresNum;
	}

	return number; 

}