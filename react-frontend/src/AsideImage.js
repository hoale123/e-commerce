import { Card, Image } from "semantic-ui-react";

function AsideImage({ product }) {

  return (
    <div className="ui centered card"  style={{marginTop:"90px", marginLeft:"43%"}}>

    <Card >
      <Image alt={"poop"} src={product.image} />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>Price: ${product.price}</Card.Meta>
        <Card.Meta>{product.status}</Card.Meta>
        <Card.Description> {product.description}</Card.Description>
      </Card.Content>
    </Card>
    </div>
  );
}

export default AsideImage;
