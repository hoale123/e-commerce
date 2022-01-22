import { useParams } from 'react-router-dom'
import AsideImage from './AsideImage'


function ShowAsideImage({products }){
    const { id } = useParams();
    const potato = products.filter((item) => item.id === parseInt(id))
    
    return (
        <>
       {potato.map((product) => {
    return <AsideImage key={product.id} potato={potato} product={product}  />})}
    
        </>
    )}

export default ShowAsideImage;