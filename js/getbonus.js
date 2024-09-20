document.getElementById('getbonusbtn').addEventListener('click',function(event){
    event.preventDefault()
    const copuncode = getInputIdField('couponinput')
    if(copuncode === 1234){
        const availabelmoney = getInputTextField('availableammount')
        const getbonus = availabelmoney + 100
        document.getElementById('availableammount').innerText = getbonus
    }
    else{
        alert('please enter a correct copun code')
    }
})