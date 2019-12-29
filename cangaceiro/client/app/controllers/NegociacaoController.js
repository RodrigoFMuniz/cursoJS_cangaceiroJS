class NegociacaoController{
    adiciona(event){
        event.preventDefault();
        const $ = document.querySelector.bind(document)

        const inputData = $('#data');
        const inputQuantidade = $('#quantidade')
        const inputValor = $('#valor')

        console.log(inputData.value)
        console.log(parseInt(inputQuantidade.value))
        console.log(parseFloat(inputValor.value))
        // console.log(typeof(inputValor.value))
        // console.log(typeof(inputQuantidade.value))
        // console.log(typeof(parseInt(inputQuantidade.value)))
        // console.log(typeof(parseFloat(inputQuantidade.value)))
    }
}


// console.log('Negociação controller ' + new NegociacaoController()