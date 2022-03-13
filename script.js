var str= "Skill Safari"

console.log(str.length)
console.log(str.toUpperCase("Skill Safari"))
console.log(str.indexOf("a"))

console.log("Steve:Big man in a suit of armor. Take that Off, what are you?\nTony:Genius,Playboy,Billionaire,Philanthropist")


//body mass index

function BMI()

{

var h=Number(document.getElementById("height").value);

var w=Number(document.getElementById("weight").value);

 

const bmi= (w/((h*h)/10000)).toFixed(2);

if (bmi < 18.6) {result.innerHTML =`Under Weight :${bmi}`;}

else if (bmi >= 18.6 && bmi < 24.9)

{
result.innerHTML =   `Normal : ${bmi}`;
}

else

{result.innerHTML =`Over Weight : ${bmi}`;

}

 }