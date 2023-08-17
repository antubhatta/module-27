/*
1.add a event handler to the deposit button 
2.get deposit amount from the deposit input field
3. clear the deposit input field after getting the value
4.get the previous deposit total
5.calculate new deposit total and set the vlaue dposit total
6.get current balance total 
7.calculate the new balance and set it to the balance element
*/
// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawField=document.getElementById('withdraw-field')
    const newAmountString =withdrawField.value
    const newAmount= parseFloat(newAmountString)
    // step-7
    withdrawField.value=''

    // step-9
    if(isNaN(newAmount)){
        alert('invalid string')
        return
    }

    // step-3
    const withdrawTotalElement= document.getElementById('withdraw-total')
    const previousWithdrawTotalString=withdrawTotalElement.innerText
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString)
    // step-4
    const withdrawTotal= newAmount+previousWithdrawTotal
    withdrawTotalElement.innerText=withdrawTotal

    
    // step-6
    const previousBalanceElement=document.getElementById('balance-total')
    const previousBalanceTotalString=previousBalanceElement.innerText
    const previousBalanceTotal=parseFloat(previousBalanceTotalString)
    
    // step-8
    if(newAmount>previousBalanceTotal){
        alert('bap er bank e taka nai')
        return
    }
    // step-7
    const currentBalanceTotal=previousBalanceTotal-newAmount
    previousBalanceElement.innerText=currentBalanceTotal

    
})