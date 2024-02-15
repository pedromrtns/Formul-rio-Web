document.getElementById('myForm').addEventListener('submit', function(event) {
    console.log("Evento de envio do formulário acionado");
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var dataNascimento = document.getElementById('data_nascimento').value;

    if(!nome || !email || !telefone || !genero || !dataNascimento){
        alert("Preencha todos os campos");
        event.preventDefault(); //Impede o envio
    }else {
        alert("Formulário enviado com sucesso!")
    }
});

document.getElementById('data_nascimento').addEventListener('change', function(event){
    var dataSelecionada = new Date(this.value);
    var dataAtual = new Date();

    if(dataSelecionada > dataAtual){
        alert("A data não pode ser maior que a data atual");
        this.value = ''; // Limpa o campo de data selecionada
    }
});