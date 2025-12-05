📦 Projeto React – Busca de Produtos via API

Este projeto é um exemplo simples e funcional de como consumir uma API utilizando React, useEffect, useState e exibir os dados dinamicamente na interface.
O objetivo é demonstrar como realizar requisições HTTP e renderizar resultados de forma prática.

🚀 Tecnologias utilizadas

⚛️ React

🔗 Fetch API

🎨 TailwindCSS

⚙️ Vite

📂 Estrutura básica

O componente principal faz uma chamada à API local (json-server) e exibe os produtos em formato de cards.

import React, { useEffect, useState } from 'react'

const Busca = () => {
    const [product, setProduct] = useState([])
    const url = "http://localhost:3000/produtos";

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            setProduct(data)
        }
        fetchData()
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4 p-4 justify-items-center mt-10'>
            {product.map((p) => (
                <div key={p.id} className='text-white mb-10 bg-neutral-600 rounded-md w-50 h-fit p-2 hover:opacity-50 hover:scale-105 transition-all font-[Poppins]'>
                    <p><strong className='mr-2'>Nome:</strong>{p.name}</p>
                    <p><strong className='mr-2'>Preço:</strong>R${p.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Busca

▶️ Como rodar o projeto

Instale as dependências

npm install


Execute o projeto

npm run dev


Abra no navegador

http://localhost:5173/

🌐 API utilizada (JSON Server)

Para rodar a API local, utilize:

npm install -g json-server
json-server --watch db.json --port 3000


Formato esperado (db.json):

{
  "produtos": [
    { "id": 1, "name": "Produto A", "price": 50 },
    { "id": 2, "name": "Produto B", "price": 75 }
  ]
}

🌍 Deploy com GitHub Pages

Este projeto pode ser publicado usando GitHub Pages. Após gerar a build:

npm run build
npm run deploy


O site ficará disponível no endereço configurado no repositório.

📝 Objetivo do projeto

Este mini-projeto foi criado para estudar:

Como consumir APIs no React

Como exibir dados dinamicamente em JSX

Práticas de organização de componentes

Integração com GitHub Pages

📌 Status

✔️ Completo e funcional
📚 Útil como referência para estudos de React + API
