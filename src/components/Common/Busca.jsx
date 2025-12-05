import React, { useEffect, useState } from 'react'

const Busca = () => {

    const [product, setProduct] = useState([])
    
    const url = "http://localhost:3000/produtos";

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const data = await res.json();

                setProduct(data)
            } catch (error) {
                alert("Erro ao buscar os dados: " +  error);
            }
        }
 
        fetchData()
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4 p-4 justify-items-center mt-10'>
            {product.map((p) => (
                
                    <div key={p.id} className='text-white mb-10 bg-neutral-600 rounded-md w-50 h-fit p-2 hover:opacity-50 hover:scale-105 transition-all font-[Poppins] '>
                        <p><strong className='mr-2'>Nome:</strong>{p.name}</p>
                        <p><strong className='mr-2'>Price:</strong>R${p.price}</p>
                    </div>
            ))}
            
        </div>
    )
}

export default Busca