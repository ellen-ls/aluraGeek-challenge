async function getProduct() {
    try {
        const response = await fetch("http://localhost:3000/produtos")
        const produtos = await response.json()
        console.log(produtos)
  return produtos
      
    } catch (error) {
        console.error("Erro ao buscar produto", error)
    }
   
}

async function postProduct(imagem, nome, preco) {
    try {
        const response = await fetch("http://localhost:3000/produtos", {
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                imagem,
                nome,
                preco
            })
        })
   const produtos = await response.json()     
       
  return produtos
      
    } catch (error) {
        console.error("Erro ao buscar produto", error)
    }
   
}

async function deleteProduct(id) {
    try {
        const response = await fetch(`http://localhost:3000/produtos/${id}`,  {
            method:"DELETE",
            headers:{
                "Content-type": "application/json"
            }

        })
   const produtos = await response.json()     
       
  return produtos
      
    } catch (error) {
        console.error("Erro ao buscar produto", error)
    }
   
}

export const api = {
getProduct,
postProduct,
deleteProduct
}

