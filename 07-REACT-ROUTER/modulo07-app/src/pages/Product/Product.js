import { useParams } from "react-router-dom"

const Product = () => {
    // 4 - Rota dinâmica
    const { id } = useParams();

  return (
    <>
        <p>ID do Produto: {id}</p>
    </>
  )
}

export default Product