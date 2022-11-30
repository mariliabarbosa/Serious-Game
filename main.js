function errou(pagina){
    mostrarBotao(pagina)    
    document.querySelector(".acertou").setAttribute('disabled','disabled')
}

function acertou(pagina){
    let pontuacao_atual = Number(localStorage.getItem("pontuacao"))
    
    mostrarBotao(pagina)
    pontuar(pontuacao_atual)
}

function mostrarBotao(pagina){
    if(document.querySelector(".acertou").getAttribute('disabled') == 'disabled'){
        return
    }

    let botao = document.createElement("button")
    botao.className = 'prosseguir'

    if(pagina == 9){
        botao.setAttribute("onclick", `window.location='./tela-final.html'`)
        botao.textContent = "Finalizar"
    } else {
        botao.setAttribute("onclick", `window.location='./questao-${pagina+1}.html'`)
        botao.textContent = "Prosseguir"
    }
    
    document.querySelector(".botao-prosseguir").appendChild(botao)
}

function pontuar(pontuacao_atual){
    localStorage.setItem("pontuacao", pontuacao_atual+1)
    document.querySelector(".acertou").setAttribute('disabled','disabled')
}

function mostrarPontuacao(){
    let pontuacao = Number(localStorage.getItem("pontuacao"))
    document.querySelector(".pontuacao").innerText = pontuacao
}

function perdeu(pagina){
    let pontuacao = Number(localStorage.getItem("pontuacao"))
    if(pontuacao < pagina-3){
        localStorage.setItem("status", "perdeu")
        window.location = 'tela-final.html'
    }
}

function mostrarTelaDerrota(){
    let status = localStorage.getItem("status")

    if(status == "perdeu"){
        console.log('oi')
        document.querySelector(".mensagem").innerText = 'Você errou mais de 3 questões'
        document.querySelector(".pontuacao").innerText = 'Tente novamente'
        document.querySelector(".pontuacao").style = 'color: #DB162F'
    }
}