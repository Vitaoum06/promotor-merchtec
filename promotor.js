document.addEventListener("DOMContentLoaded", () => {
  carregarMercados();
});

function carregarMercados() {
  fetch("http://127.0.0.1:5000/lojas")
    .then(res => res.json())
    .then(mercados => {
      const lista = document.getElementById("lista-mercados");
      lista.innerHTML = "";

      mercados.forEach(mercado => {
        const li = document.createElement("li");
        const imagem = mercado.imagem || "IMAGEM/padrao.jpg";

        li.innerHTML = `
          <img src="${imagem}" alt="${mercado.nome}">
          <div class="info">
            <h2>${mercado.nome}</h2>
            <p>${mercado.endereco}</p>
          </div>
        `;

        const img = li.querySelector("img");
        img.onerror = function () {
          this.src = "IMAGEM/padrao.jpg";
        };

        li.addEventListener("click", () => {
          abrirDetalhes(mercado.nome, mercado.endereco);
        });

        lista.appendChild(li);
      });
    })
    .catch(err => {
      console.error("Erro ao buscar mercados:", err);
      alert("Erro ao carregar mercados ");
    });
}