async function consultaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro){
            throw Error("Cep não existe");
        } else {
            var logradouro = document.getElementById('endereco');
            var cidade = document.getElementById('cidade');
            var estado = document.getElementById('estado');

            logradouro.value = consultaCepConvertida.logradouro;
            cidade.value = consultaCepConvertida.localidade;
            estado.value = consultaCepConvertida.uf;
            

            console.log(consultaCepConvertida);
            return consultaCepConvertida;
        }
    }
    catch (error){
        mensagemErro.innerHTML = "<p>Cep Inválido. Tente novamente.</p>";
        console.log(error);
    }
}

var cepDigitado = document.getElementById('cep');
cepDigitado.addEventListener("focusout", () => consultaEndereco(cepDigitado.value));
