const logInButton=document.getElementById('log-button');
logInButton.addEventListener('click',function(argument){
	const loginArea=document.getElementById('login-area');
	loginArea.style.display='none';
	const transaction=document.getElementById('transaction');
	transaction.style.display='block';
})
//Deposit button Handeler
const deposit=document.getElementById('addDeposit');
deposit.addEventListener('click',function() { 
	// const depositAmount=document.getElementById('depositAmount').value;
 //    const depositNumber=parseFloat(depositAmount);
     const depositNumber=getInputElement('depositAmount');
     updateBalance('currentBalance',depositNumber);
     updateBalance('currentDeposit',depositNumber);
    /*const currentDeposit=document.getElementById('currentDeposit').innerText;
    const currentDepositNumber=parseFloat(currentDeposit);
    const totalDeposit=depositNumber+currentDepositNumber;
    //console.log(totalDeposit);
    document.getElementById('currentDeposit').innerText=totalDeposit;
    */
 document.getElementById('depositAmount').value="";
   /*
    const currentBalance=document.getElementById('currentBalance').innerText;
    const currentBalanceNumber=parseFloat(currentBalance);
    const totalBalance=currentBalanceNumber+totalDeposit;
    document.getElementById('currentBalance').innerText=totalBalance;
    */
})
//withdraw button
const withdraw=document.getElementById('addWithdraw');
 withdraw.addEventListener('click',function(){
    const withdrawNumber=getInputElement('withdrawAmount')
    updateBalance('currentWithdraw',withdrawNumber);
    updateBalance('currentBalance',-1*withdrawNumber);
    document.getElementById('withdrawAmount').value="";
 })
function getInputElement(id) {
    const Amount=document.getElementById(id).value;
    const amountNumber=parseFloat(Amount);
    return amountNumber;
}

function updateBalance(id,depositNumber){
   const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const total=depositNumber+currentNumber;
    document.getElementById(id).innerText=total;
}






