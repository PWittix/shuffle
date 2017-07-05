// JavaScript Document

//vars

//numbers initialized at 0
var numTotalCoins=0, numTotalRuns=0, numRatePSB=0, numRateRML=0, numTotalPSB=0, numTotalRML=0, numPFail=0, numP0=0, numP1=0, numP2=0, numP3=0, numP4=0, numP5=0, numFail=0, num0=0, num1=0, num2=0, num3=0, num4=0, num5=0;
//doc fields organized by row
//row 1
var totalCoins=document.getElementById("totalCoins"), ratePSB=document.getElementById("ratePSB"), rateRML=document.getElementById("rateRML"), totalPSB=document.getElementById("totalPSB"), totalRML=document.getElementById("totalRML"), totalRuns=document.getElementById("totalRuns");
//row 2
var pFail=document.getElementById("pFail"), p0=document.getElementById("p0"), p1=document.getElementById("p1"), p2=document.getElementById("p2"), p3=document.getElementById("p3"), p4=document.getElementById("p4"), p5=document.getElementById("p5");
//row 3
var eleNumFail=document.getElementById("numFail"), eleNum0=document.getElementById("num0"), eleNum1=document.getElementById("num1"), eleNum2=document.getElementById("num2"), eleNum3=document.getElementById("num3"), eleNum4=document.getElementById("num4"), eleNum5=document.getElementById("num5");
//buttons - get from doc
var btnFail=document.getElementById("btnFail"), btn0=document.getElementById("btn0"), btn1=document.getElementById("btn1"), btn2=document.getElementById("btn2"), btn3=document.getElementById("btn3"), btn4=document.getElementById("btn4"), btn5=document.getElementById("btn5"), btnReset=document.getElementById("btnReset");


//radio elements
var c300=document.getElementById("c300"), c400=document.getElementById("c400"), c500=document.getElementById("c500");

var costCoins=0;

var valid=true;


//event listeners
btnFail.addEventListener("click", incFail);
btn0.addEventListener("click", inc0);
btn1.addEventListener("click", inc1);
btn2.addEventListener("click", inc2);
btn3.addEventListener("click", inc3);
btn4.addEventListener("click", inc4);
btn5.addEventListener("click", inc5);
btnReset.addEventListener("click", clear);

//functions
//calc calculates the percentages, rate, etc. of all values
function calc(){
"use strict";
numPFail = (numFail/numTotalRuns)*100;
numP0 = (num0/numTotalRuns)*100;
numP1 = (num1/numTotalRuns)*100;
numP2 = (num2/numTotalRuns)*100;
numP3 = (num3/numTotalRuns)*100;
numP4 = (num4/numTotalRuns)*100;
numP5 = (num5/numTotalRuns)*100;
numRatePSB = numTotalPSB/numTotalRuns;
numRateRML = numTotalRML/numTotalRuns;
}
//update changes all values in document to reflect the changes from pressing the "+" key of any option
function update(){
"use strict";
totalCoins.textContent="Total Coins: " + numTotalCoins;
totalPSB.textContent="Total PSB: " + numTotalPSB;
totalRML.textContent="Total RML: " + numTotalRML;
ratePSB.textContent="PSB per Run: " + numRatePSB.toFixed(2);
rateRML.textContent="RML per Run: " + numRateRML.toFixed(2);
totalRuns.textContent="Total Runs: " + numTotalRuns;
pFail.textContent= numPFail.toFixed(2)+"%";
p0.textContent= numP0.toFixed(2)+"%";
p1.textContent= numP1.toFixed(2)+"%";
p2.textContent= numP2.toFixed(2)+"%";
p3.textContent= numP3.toFixed(2)+"%";
p4.textContent= numP4.toFixed(2)+"%";
p5.textContent= numP5.toFixed(2)+"%";
eleNumFail.textContent=numFail;
eleNum0.textContent=num0;
eleNum1.textContent=num1;
eleNum2.textContent=num2;
eleNum3.textContent=num3;
eleNum4.textContent=num4;
eleNum5.textContent=num5;
}
//check coin costs
function check(){
"use strict";
//if statements to determine costCoins
if(c300.checked===true){
	costCoins=300;
	valid=true;
}
else if(c400.checked===true){
	costCoins=400;
	valid=true;
}
else if(c500.checked===true){
	costCoins=500;
	valid=true;
}
else{
	alert("Please select cost");
	valid=false;
}
}
//function to calc costs
function costs(){
"use strict";
if (numFail==numTotalRuns)
	{
		numTotalCoins += costCoins;
	}
	else
	{
		numTotalCoins = costCoins * numTotalRuns - 30 * (numTotalRuns - 1) + 30 * (numFail) - 200;
	}
}


//functions for each specific button
//Fail Button
function incFail(){
"use strict";
check();
if(valid==true){
	numFail++;
	numTotalRuns++;
	calc();
	costs();
	update();
	}
}
//0 PSB Button
function inc0(){
"use strict";
check();
if(valid==true){
	num0++;
	numTotalRuns++;
	calc();
	costs();
	update();
	}	
}
//1 PSB Button
function inc1(){
"use strict";
check();
if(valid==true){
	num1++;
	numTotalRuns++;
	numTotalPSB++;
	calc();
	costs();
	update();
	}
}
//2 PSB Button
function inc2(){
"use strict";
check();
if(valid==true){
	num2++;
	numTotalRuns++;
	numTotalPSB+=2;
	calc();
	costs();
	update();
	}	
}
//0 PSB Button 1 RML
function inc3(){
"use strict";
check();
if(valid==true){
	num3++;
	numTotalRuns++;
	numTotalRML++;
	calc();
	costs();
	update();
	}	
}
//1 PSB Button 1 RML
function inc4(){
"use strict";
check();
if(valid==true){
	num4++;
	numTotalRuns++;
	numTotalPSB++;
	numTotalRML++;
	calc();
	costs();
	update();
	}	
}
//2 PSB Button 1 RML
function inc5(){
"use strict";
check();
if(valid==true){
	num5++;
	numTotalRuns++;
	numTotalPSB+=2;
	numTotalRML++;
	calc();
	costs();
	update();
	}	
}

//reset
function clear(){
"use strict";
numTotalCoins=0;
numTotalRuns=0;
numRatePSB=0;
numRateRML=0;
numTotalPSB=0;
numTotalRML=0;
numPFail=0;
numP0=0;
numP1=0;
numP2=0;
numP3=0;
numP4=0;
numP5=0;
numFail=0;
num0=0;
num1=0;
num2=0;
num3=0;
num4=0;
num5=0;
c300.checked=false;
c400.checked=false;
c500.checked=false;
valid=true;
update();
}