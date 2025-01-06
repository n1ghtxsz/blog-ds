// Salvar as postagens no localStorage
function salvarPostagens() {
    const posts = Array.from(itemContainer.children).map(post => ({
        title: post.querySelector(".card-title").innerText,
        content: post.querySelector(".card-text").innerText
    }));
    localStorage.setItem("blogPosts", JSON.stringify(posts));
}

// Carregar as postagens do localStorage
function carregarPostagens() {
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    const noItems = document.getElementById("no-items");
    const itemContainer = document.getElementById("item-container");

    if (posts.length > 0) {
        noItems.innerHTML = ""; // Remove a mensagem de "sem itens"
        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.className = "card";
            postCard.style.width = "18rem";
            postCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                </div>
            `;
            itemContainer.appendChild(postCard);
        });
    }
}

// Expandir o modal para adicionar novo post
function expandir() {
    const modal = document.getElementById("post-modal");
    modal.classList.remove("d-none");
    modal.classList.add("d-block");
}

// Fechar o modal
function fecharModal() {
    const modal = document.getElementById("post-modal");
    modal.classList.remove("d-block");
    modal.classList.add("d-none");
}

// Adicionar nova postagem e salvar no localStorage
document.querySelector("#post-modal form").addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const titleInput = document.getElementById("nomePostagem");
    const contentInput = document.getElementById("textoPostagem");
    const itemContainer = document.getElementById("item-container");
    const noItems = document.getElementById("no-items");

    if (titleInput.value.trim() !== "" && contentInput.value.trim() !== "") {
        // Criar o card da nova postagem
        const postCard = document.createElement("div");
        postCard.className = "card";
        postCard.style.width = "18rem";
        postCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${titleInput.value.trim()}</h5>
                <p class="card-text">${contentInput.value.trim()}</p>
            </div>
        `;
        itemContainer.appendChild(postCard);

        // Limpar os campos do formulário
        titleInput.value = "";
        contentInput.value = "";

        // Remover a mensagem de "sem itens", se necessário
        if (noItems) noItems.innerHTML = "";

        // Salvar no localStorage
        salvarPostagens();

        // Fechar o modal
        fecharModal();
    }
});

// Carregar postagens ao carregar a página
document.addEventListener("DOMContentLoaded", carregarPostagens);