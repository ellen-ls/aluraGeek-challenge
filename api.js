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

export const api = {
getProduct
}

