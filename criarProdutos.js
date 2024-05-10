import { api } from "./api.js"

const formulario = document.querySelector("[data-formulario]")

async function criarProdutos(event){
    event.preventDefault()

    const imagem = document.querySelector("[data-imagem]").value
    const nome = document.querySelector("[data-nome]").value
    const valor = document.querySelector("[data-valor]").value

    try {
      await api.postProduct(imagem, nome, valor)
      limparCampos()
  } catch (error) {
      console.error("Erro ao criar produto", error)
  }


}

formulario.addEventListener("submit", event => criarProdutos(event))

function limparCampos() {
  document.querySelector("[data-imagem]").value = ""
  document.querySelector("[data-nome]").value = ""
  document.querySelector("[data-valor]").value = ""
}

formulario.addEventListener("reset", event => limparCampos(event))
