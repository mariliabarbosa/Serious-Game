function comecar(){
    window.location='./questao-01.html'
}

function errou(pagina){
    mostrarBotao(pagina)    
    document.querySelector(".acertou").setAttribute('disabled','disabled')
}

function acertou(pagina){
    pontuacao_atual = Number(localStorage.getItem("pontuacao"))
    
    mostrarBotao(pagina)
    pontuar(pontuacao_atual)
}

function mostrarBotao(pagina){
    if(document.querySelector(".acertou").getAttribute('disabled') == 'disabled'){
        return
    }

    botao = document.createElement("button")
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
    pontuacao = Number(localStorage.getItem("pontuacao"))
    document.querySelector(".pontuacao").innerText = pontuacao
}