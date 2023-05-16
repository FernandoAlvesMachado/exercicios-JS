function abreTexto(evt) {
    let itemClicado = evt.target.parentNode
    console.log(itemClicado)

    
    let containerTextos = document.querySelector(".containerTextos")
    let elementoAtivo = containerTextos.querySelector(".ativo")
    elementoAtivo.classList.remove("ativo")

    itemClicado.classList.add("ativo")
    // let itemClicado = this.getAttribute["id"]
    // console.log(itemClicado)




    // if(itemClicado == 'texto1') {
    //     let paragrafo = this.querySelector("p")
    //     paragrafo.styles.height = '300px'
    //     paragrafo.styles.flexDirection = '300px'

    //     selecionaPonto(itemClicado)
    // } else if(itemClicado == 'texto2') {

    // } else {

    // }
}


function selecionaPonto(classeElemento) {
    let ponto = document.querySelector(`.${classeElemento}`)
}