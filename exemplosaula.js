var consultaCep = fetch('https://viacep.com.br/ws/01001999/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro){
        throw Error ("Esse CEP não existe");
    } else {
        console.log(r);
    }
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log("Processamento concluído"));

console.log(consultaCep);

///////////////////////////////Agora com async e await////////////////////////////////////////

async function consultaEndereco(cep){
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro){
            throw Error("Cep não existe");
        } else {
            console.log(consultaCepConvertida);
            return consultaCepConvertida;
        }
    }
    catch (error){
        console.log(error);
    }
}

consultaEndereco();

//////////////////////////////Usando o Promise All///////////////////////////////////////////////

let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => consultaEndereco(valores));
Promise.all(conjuntoCeps).then(resposta => console.log(resposta));

