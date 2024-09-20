document.getElementById('cashoutbtn').addEventListener('click',function(event){
    
    event.preventDefault()
    const cashoutmoney = getInputIdField('cashoutmoney')
    const cashoutpin = getInputIdField('cashoutpin')
    console.log('add cashout money and pin',cashoutmoney,cashoutpin);
    if(isNaN(cashoutmoney)){
        alert('failed to add money')
        return

    }
    
    if(cashoutpin === 1234){
        const availablecashoutmoney = getInputTextField('availableammount')
        if(cashoutmoney > availablecashoutmoney){
            alert('you do not have enough money')
            return
        }
        const updatebalance = availablecashoutmoney - cashoutmoney
        console.log(updatebalance);
        document.getElementById('availableammount').innerText = updatebalance
  
        

        const div = document.createElement('div')
        div.classList.add('bg-yellow-300','p-3','rounded-xl')
        div.innerHTML = `
        <p>withdraw : ${cashoutmoney}</p>
        <p> update money: ${updatebalance}</p>
        `
        document.getElementById('transection-show').appendChild(div)
    }
    else{
        alert('failed to the cashout')
    }
})