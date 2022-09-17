const cep=document.querySelector('#cep');
const campos=document.querySelectorAll('.campos');
function ExibirDados(dados)
{
    campos[0].value=dados.cep;
    campos[1].value=dados.logradouro;
    campos[2].value=dados.bairro;
    campos[3].value=dados.localidade;
    campos[4].value=dados.uf;
    campos[5].value=dados.ibge;
}
async function CarregarDados()
{
    let value=cep.value.replace(/\D/g,'');;
    if(value.length!=8)
    {
        alert("Número digitado invalido")
        return;
    }
    let jsonData= await fetch(`https://viacep.com.br/ws/${value}/json/`,
    {
        method:'GET'
    })
    .then(x=>x.json())
    .then(ExibirDados)
    .catch(x=>alert("Número digitado invalido"));
}
cep.addEventListener("focusout", CarregarDados);
