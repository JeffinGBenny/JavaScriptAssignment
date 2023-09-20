let x = Math.round(Math.random() * 100);
alert(x)
let guess=[];
var i=0;
do{ 
    guess[i]=prompt("Enter a number between 1 and 100");
    
    diff=Math.abs(guess[i]-x);
    if(diff===0){
        alert("Right guess" );
        break;
    }
    
    
    else if(diff>25)
        {
            alert("Too high" )
        }
        else if(diff<25){
            alert("Too low" )
        }

        i++;
}while(guess[i]!==x)

for(j=0;j<i;j++){
    document.writeln(guess[j])
}