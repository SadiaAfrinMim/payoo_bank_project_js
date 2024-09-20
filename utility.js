function getInputIdField(id){
  const anyId =   document.getElementById(id).value
  const anyIdParseFloat = parseFloat(anyId)
  return anyIdParseFloat
}

function getInputTextField(id){
    const anyInnerText = document.getElementById(id).innerText
    const anyInnerTextParseFloat = parseFloat(anyInnerText)
    return anyInnerTextParseFloat
}


// btn clicked show off

function clickShowFieldBtn(id){
    document.getElementById('add-money-show-section').classList.add('hidden')
    document.getElementById('cashout-show-section').classList.add('hidden')
    document.getElementById('transection-section').classList.add('hidden')
    document.getElementById('transfer-show-section').classList.add('hidden')
    document.getElementById('getbonus-show-section').classList.add('hidden')
    document.getElementById('billpay-show-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')

}