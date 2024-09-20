document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
    const loginPhoneNumber = getInputIdField('login-phone-number')
    const loginPassword = getInputIdField('login-password')
    if(loginPhoneNumber === 5 && loginPassword === 1234){
        window.location.href = '/home.html'
    }
    else{
        alert('please valied number and password')
    }
})