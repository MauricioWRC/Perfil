let btt = document.getElementById('btt')

function clicou(){
    let check = document.getElementById('checkbox-menu')
    let OpcPos = document.querySelector('.OpcPos')
    if(check.checked){
        OpcPos.style.display = 'none'
    }else{
        OpcPos.style.display= 'flex'
    }
}

btt.addEventListener('click', clicou)


