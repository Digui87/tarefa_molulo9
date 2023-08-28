const form = document.getElementById('form-tarefas');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaTarefa();
    atualizaLista();
})

function adicionaTarefa() {
    const inputNomeTarefa = document.getElementById('nome-tarefa');


    let linha = '<ul>';
    linha += `<li>${inputNomeTarefa.value}</li>`;
    linha += '</ul>';

    linhas += linha;

    const corpoLista = document.querySelector('ul');
    corpoLista.innerHTML = linhas;
    inputNomeTarefa.value = '';
}
    function atualizaLista() {
        const listaTarefa = document.querySelector('ul');
        listaTarefa.innerHTML = linhas;
    }

/*$('form').on('submit', function (e) {
    e.preventDefault();
    const novaTarefa = $('#nome-tarefa').val();
    const novoItem = $('<li></li>');
    $(`"${novaTarefa}"`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#nome-tarefa').val(' ');
})*/