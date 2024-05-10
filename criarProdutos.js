import { api } from "./api.js"

const formulario = document.querySelector("[data-formulario]")

async function criarProdutos(event){
    event.preventDefault()

    const imagem = document.querySelector("[data-imagem]").value
    const nome = document.querySelector("[data-nome]").value
    const valor = document.querySelector("[data-valor]").value

  await api.postProduct(imagem,nome,valor)
}


formulario.addEventListener("submit", event => criarProdutos(event))