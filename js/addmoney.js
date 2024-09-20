

const addmoney = document.getElementById('addmoneybtn').addEventListener('click',function(event){
    event.preventDefault()
        const addmoneyinput = getInputIdField('addmoneyinput')
        const addmoneypin = getInputIdField('addmoneypin')
        console.log('addmoney and pin number:',addmoneyinput,addmoneypin);

        if(isNaN(addmoneyinput)){
            alert('failed to add money')
            return

        }
        if(addmoneypin === 1234){
            const availableMoney = getInputTextField('availableammount')
            console.log(availableMoney);
            const updateMoney = availableMoney + addmoneyinput
            console.log(updateMoney);
            document.getElementById('availableammount').innerText = updateMoney

          const div = document.createElement('div')
            div.classList.add('bg-green-200','rounded-xl','p-3')
            div.innerHTML = `
           <p> Addmoney : ${addmoneyinput} update balance : ${availableMoney}</p>
            `
             document.getElementById('transection-show').appendChild(div)
    
            
        } 
        else{
            alert('failed to the add money')
        }
})