let contador = document.getElementById('item-container')
let semitems = document.getElementById('no-items')

if (contador.children.length === 0) {
    semitems.innerHTML = `<h1 class="fs-5" >Este blog ainda não possui nenhuma postagem</h1>`;
} else {
    semitems.innerHTML = ''; // Limpa a mensagem caso haja itens
}
