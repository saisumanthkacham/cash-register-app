const billAmount = document.querySelector(".bill-amount");
console.log(billAmount);
const cashGiven = document.querySelector(".cash-given");
console.log(cashGiven);
const returnChange = document.querySelector(".return-change");
console.log(returnChange);
const submitBtn = document.querySelector(".submit-btn");
console.log(submitBtn);
const resetBtn = document.querySelector(".reset-btn");
console.log(resetBtn);
const notesTable = document.querySelector(".notes-table");
const noOfNotes = document.querySelectorAll(".no-of-notes");
var noteArr = [2000,500,100,20,10,5,1];
var notes = 0;
notesTable.style.display="none";
function minNotesFinder(changeValue)
{
    for(let i=0;i<noteArr.length;i++)
    {
         notes = Math.trunc(changeValue/noteArr[i]);
         changeValue%=noteArr[i];
         noOfNotes[i].innerText=notes;
    }
}


function compareValue(cash,bill)
{
    
    var change ="";
     var changeValue = cash-bill; 
    if(bill>0&&cash>0)
    {
       if(cash>bill)
       {
            change = "Return Cash : "+changeValue;
            minNotesFinder(changeValue);
            notesTable.style.display="block";

       }
       else if(cash===bill)
       {
           change = "paid exact amount nothing to return😀";
           notesTable.style.display="none";
       }
       else{
        
           change = "more cash required "+(-changeValue);
          notesTable.style.display="none";
       }
    }
    else
    {
       
 change = "please enter some valid bill Amount and cash amount!"
 notesTable.style.display="none";
    }
    returnChange.innerText = change;
}
function resetValues(){
    billAmount.value=''; 
    cashGiven.value='';
    returnChange.innerText ="";
    notesTable.style.display="none";

}

function eventHandler()
{
   var bill=Number(billAmount.value);
   var cash=Number(cashGiven.value);
   console.log(bill,cash);
   compareValue(cash,bill);
}
resetBtn.addEventListener('click',resetValues);

submitBtn.addEventListener('click',eventHandler);