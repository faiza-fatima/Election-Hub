let chicken65votes=0;
let biryanivotes=0;
let Maragvotes=0;
 let totalcount=0;

function chicken65votecount(){
    chicken65votes++;
    totalcount++;
    console.log(chicken65votes,totalcount)
    stopvotes(totalcount)
}

function biryanivotecount(){
    biryanivotes++;
    totalcount++;
    console.log(biryanivotes,totalcount)
    stopvotes(totalcount)
}

function Maragvotecount(){
    Maragvotes++;
    totalcount++;
    console.log(Maragvotes,totalcount)
    stopvotes(totalcount)
}


function stopvotes(count){
    if(count >=8){

        document.getElementById("chicken65btn").disabled=true;
        document.getElementById("biryanibtn").disabled=true;
        document.getElementById("Maragbtn").disabled=true;
        alert ("voting are closed")

        console.log(count)
        console.log(`number of votes of chicken65,${chicken65votes}`)
        console.log(`number of votes of biryani,${biryanivotes}`)
        console.log(`number of votes of Marag,${Maragvotes}`)
        console.log("winner among three")
    
        let greatest=(chicken65votes>biryanivotes&&chicken65votes>Maragvotes)?"chicken65":(biryanivotes>chicken65votes)?"biryani":"Marag";
        console.log(greatest )
        document.getElementById("displayText").innerHTML="Voting Closed"
        alert(`winner is ${greatest}`)
        document.getElementById("text").innerHTML=`Winner is ${greatest}`
    
    }
}