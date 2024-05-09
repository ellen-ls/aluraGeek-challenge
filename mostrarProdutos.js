import { api } from "./api.js"

const lista = document.querySelector("[data-lista]")

function card(imagem, nome, preco){
    const produtos = document.createElement("div")
    produtos.className= "box-1"
    produtos.innerHTML = `<img src="${imagem}" class="imagem-card">
    <p class="text-card">${nome}</p>
    <div class="preco">
      <p class="preco-card">R$ ${Number(preco)}</p>
      <i class="fa fa-trash-o" style="font-size:24px"></i>
    </div>`

    return produtos
}

async function listaProdutos(){
    const listaAPI = await api.getProduct()
    listaAPI.forEach(element => lista.appendChild(card(element.imagem, element.nome, element.preco)));
        
    
}

listaProdutos()