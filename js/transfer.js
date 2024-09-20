document.getElementById('transeferbtn').addEventListener('click',function(event){
    event.preventDefault()

    const transferaccoutnumber = getInputIdField('transfaraccountnumber')
    const transfarmoney = getInputIdField('transfarmoney')
    const transermoneypin =getInputIdField('transferpin')
    if(transferaccoutnumber === 1234 && transermoneypin === 1234){
        const availabelmoney = getInputTextField('availableammount')
        const updatemoney = availabelmoney - transfarmoney
        document.getElementById('availableammount').innerText = updatemoney

        const div = document.createElement('p')
        div.classList.add('bg-blue-300','p-3','rounded-xl')
        div.innerHTML = `
        <p>transection money: ${transfarmoney} total amount: ${updatemoney}</p>
        `
        document.getElementById('transection-show').appendChild(div)
    }
    else{
        alert('failed to transection')
    }

})