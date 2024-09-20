document.getElementById('billpaybtn').addEventListener('click',function(event){
    console.log('clicked me');
    event.preventDefault()
    const billpaynumber = getInputIdField('billpayaccount')
    const amounttopay = getInputIdField('billpaymoney')
    const billpaypin = getInputIdField('billpaypin')
    console.log(billpaynumber,amounttopay,billpaynumber);
    if(isNaN(amounttopay)){
        alert('try again in valid number')
        return;
    }
    if(billpaynumber === 1234 && billpaypin=== 1234 ){
        const availabelmoney = getInputTextField('availableammount')
        if(amounttopay>availabelmoney){
            alert('enough money to pay bill')
            return;
        }
        const updatemoney = availabelmoney - amounttopay
        document.getElementById('availableammount').innerText = updatemoney

        const div = document.createElement('div')
        div.classList.add('bg-pink-600','p-3','rounded-xl')
        div.innerHTML =`bill pay: ${amounttopay} update balance : ${updatemoney}`
        document.getElementById('transection-show').appendChild(div)
    }
    else{
        alert('no paying bill and try again')
    }

})