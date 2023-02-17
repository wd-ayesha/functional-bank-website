// DRY --> Do not Repeat Yourself
document.getElementById('btn-deposit').addEventListener('click', function(){
    /* 
    1.get element by id
    2.get the value from the element
    3.convert string value to number
    */
   const newDepositAmount = getInputFieldValueById('deposit-field');
   /* get previous deposit total by id */
   const previousDepositTotal = getTextElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    /* get previous balance by using function */
   const previousBalanceTotal = getTextElementValueById('balance-total');

   // calculate new balance total
   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
   // set deposit total value
   setTextElementValueById('balance-total', newBalanceTotal);
})