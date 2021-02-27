function exibirOcultar(propriedade) {
    btnHistorico.style.display = propriedade;
    btnLimparHistorico.style.display = propriedade;
}

function existeHistorico() {
    if (urlEncurtadas == null) {
        localStorage.setItem("urlEncurtadas", JSON.stringify(urlEncurtadas));
        exibirOcultar("none")
    } else {
        exibirOcultar("block")
    }
}


btnHistorico.onclick = function historico() {
    receber.style.display = "block"
}

fecharHistorico.onclick = function fecharHistorico() {
    receber.style.display = "none"
}

btnLimparHistorico.onclick = function limpar() {
    localStorage.setItem("urlEncurtadas", null)
    existeHistorico()
    window.location.reload()
}
window.addEventListener('storage', function() {
        window.location.reload()
    })
    /* Main */

var urlEncurtadas = localStorage.getItem("urlEncurtadas"); // Recupera os dados armazenados
urlEncurtadas = JSON.parse(urlEncurtadas); // Converte string para objeto
/* Principal */
function salvar() {
    if (urlEncurtadas <= 0) urlEncurtadas = [];
    // Caso não haja conteúdo, iniciamos um vetor vazio

    if (campoText.value == "" || campoText.value.length <= 12) alert("Informe uma URL Válida")
    else {
        exibirOcultar("block")

        /* Principal */
        let campoUrl = document.getElementById("campoText").value
        let urlEndereco = new URL(campoUrl)

        var urls = JSON.stringify({
            url1: campoUrl,
            url2: urlEndereco.hostname
        });
        urlEncurtadas.push(urls);
        localStorage.setItem("urlEncurtadas", JSON.stringify(urlEncurtadas));
        window.location.reload()
    }
}
if (urlEncurtadas < 1) console.log("urlEncurtadas Está Vazia")
else {

    for (let i = 0; i < urlEncurtadas.length; i++) {
        let forUrl = JSON.parse(urlEncurtadas[i])
        var p = document.createElement('li')
        var lista = document.querySelector('#lista')
        lista.append(p)
        p.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${forUrl.url1}" ><a title="${forUrl.url1}" target="blank" href="${forUrl.url1}"> ${forUrl.url1}</a> - ${forUrl.url2}`
    }
}
/* Principal */