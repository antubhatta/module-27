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
document.getElementById('btn-deposit').addEventListener('click',function(){
//    step-2
    const depositField =document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value 
    const newDepositAmount= parseFloat(newDepositAmountString)

     // step-7

     depositField.value =''
    //  step-8
    if(isNaN(newDepositAmount)){
        alert('invalid a number')
        return
    }
    // step-3
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString= depositTotalElement.innerText
    const previousDepositTotal=parseFloat(previousDepositTotalString)
    // step-4
    const totalDepositAmount= newDepositAmount+previousDepositTotal
    depositTotalElement.innerText=totalDepositAmount
    // step-5
    const totalBalanceElement =document.getElementById('balance-total')
    const previousBalanceTotalString=totalBalanceElement.innerText
    const previousBalanceTotal=parseFloat(previousBalanceTotalString)
    // step-6
    const currentBalanceTotal=previousBalanceTotal+ newDepositAmount
    totalBalanceElement.innerText=currentBalanceTotal

   
  


})