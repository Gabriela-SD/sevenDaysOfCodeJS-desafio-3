/*Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.*/



function verificar(){
    let interesse = document.getElementsByName('interesse')
    if(interesse[0].checked){        
        document.getElementById('resp-choice-f').hidden = false
        document.getElementById('resp-choice-b').hidden = true        
        
    }else{        
        document.getElementById('resp-choice-b').hidden = false
        document.getElementById('resp-choice-f').hidden = true
    }        
}


function escolherf(){
    let checks = document.getElementsByClassName('checks')
    let vazio = ' '
    for(i = 0; i < checks.length; i++){
        if(checks[i].checked === true){
            vazio += checks[i].value +' '
           
            let result = document.getElementById('respf') 
            document.getElementById('resp-choice-esp-full').hidden = false
            result.innerHTML = `Você quer aprender: <br> ${vazio} `
        } /* else if(checks[i].checked === false){            
            let result = document.getElementById('respf') 
            document.getElementById('resp-choice-esp-full').hidden = true
            result.innerHTML = `Você deve preencher uma das alternativas`
        }  */                           
    }    
}

function escolherb(){
    let checks = document.getElementsByClassName('checks')
    let vazio = ' '
    for(i = 0; i < checks.length; i++){
        if(checks[i].checked === true){
            vazio += checks[i].value +' '
           
            let result = document.getElementById('respb') 
            document.getElementById('resp-choice-esp-full').hidden = false
            result.innerHTML = `Você quer aprender: <br> ${vazio} `
        } /* else if(checks[i].checked === false){
            let result = document.getElementById('respb') 
            document.getElementById('resp-choice-esp-full').hidden = true
            result.innerHTML = `Você deve preencher uma das alternativas `
        }   */            
    }      
}

function escolher(){
    let checkAp = document.getElementById('check-ap')
    let checkFull = document.getElementById('check-full')
    
    if(checkAp.checked == true){
       
        let result = document.getElementById('resp-esp-full') 
        result.innerHTML = `Você quer se ${checkAp.value} `  
          
    }else if ((checkFull.checked == true)){
        
        let result = document.getElementById('resp-esp-full') 
        result.innerHTML = `Você quer se tornar ${checkFull.value} `
               
    }else{       
        let result = document.getElementById('resp-esp-full') 
        result.innerHTML = `Que pena `
    }
    document.getElementById("resp-mais-tecnologia").hidden = false
    document.getElementById('txtmais').focus()   
}

function confirmar(){
    let maisTec = document.getElementById('txtmais').value
    let outras = document.getElementById('outras')
    outras.innerHTML= `suas escolhas ${maisTec}`
}


window.onload = function() {
    document.getElementById('resp-choice-f').hidden = true
    document.getElementById('resp-choice-b').hidden = true
    document.getElementById("resp-choice-esp-full"). hidden = true
    document.getElementById("resp-mais-tecnologia").hidden = true
}

