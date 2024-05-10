import { api } from "./api.js"

const lista = document.querySelector("[data-lista]")

function card(imagem, nome, preco, id){
    const produtos = document.createElement("div")
    produtos.className= "box-1"
    produtos.innerHTML = `<img src="${imagem}" class="imagem-card">
    <p class="text-card">${nome}</p>
    <div class="preco">
      <p class="preco-card">R$ ${Number(preco)},00</p>
      <i id="delete-${id}" class="fa fa-trash-o delete-icon" style="font-size:24px" data-product-id="${id}"></i>
    </div>`

    const deleteIcon = produtos.querySelector(`#delete-${id}`);
    deleteIcon.addEventListener('click', async function(_event) {
        const productId = deleteIcon.getAttribute('data-product-id');
        const deleted = await api.deleteProduct(productId);
        if (!deleted) {
            console.error("Erro ao deletar produto.");
        }
    });
    return produtos
}

async function listaProdutos(){
    lista.innerHTML = "";
    const listaAPI = await api.getProduct()
    listaAPI.forEach(element => lista.appendChild(card(element.imagem, element.nome, element.preco, element.id)));
        
    
}

listaProdutos()