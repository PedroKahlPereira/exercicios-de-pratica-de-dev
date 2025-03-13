const btnSim = document.createElement("button")
btnSim.textContent= "Sim"
btnSim.style.marginRight= "10px"


const btnNao = document.createElement("button")
btnNao.textContent="Não"

document.body.appendChild(btnSim)
document.body.appendChild(btnNao)

const produtos = []
let totalGasto = 0 
let maisDeMil = 0 
let produtoMaisBarato = null 
let precoMaisBarato = Infinity 

btnSim.addEventListener("click",() => {
let nome = prompt("Digite aqui o nome do produto")
let preco = parseFloat(prompt("Digite o preço do produto: "))

produtos.push ({nome,preco })
totalGasto += preco

if(preco>1000){
maisDeMil++ 
}
if(preco<precoMaisBarato) { 
    precoMaisBarato = preco 
    produtoMaisBarato = nome 
}
alert(`Produto ${nome} adicionado!`)
})
btnNao.addEventListener("click",() => {
    alert("Compra finalizada!")


	console.log(`A) Total gasto na compra: ${totalGasto.toFixed(2)}`)
    console.log(`B) Quantos produtos custaram acima de R$1000.00: ${maisDeMil}`)
    console.log(`C) Nome do produto mais barato: ${produtoMaisBarato}`)
})
