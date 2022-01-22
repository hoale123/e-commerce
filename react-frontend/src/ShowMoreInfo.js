import { useParams } from 'react-router-dom'
import MoreInfo from './MoreInfo'


function ShowMoreInfo({products }){
    const { id } = useParams();
    const potato = products.filter((item) => item.id === parseInt(id))
    
    return (
        <>
       {potato.map((product) => {
    return <MoreInfo key={product.id} potato={potato} product={product}  />})}
    
        </>
    )}

export default ShowMoreInfo;