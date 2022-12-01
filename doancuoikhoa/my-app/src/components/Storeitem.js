import {Button, Card} from "react-bootstrap"; 
// import PropTypes from 'prop-types';
import formatCurrency from "../ultilities/formatCurrency";

// const StoreItemProps = {
//     id: Number,
//     name: String,
//     description: String,
//     price: Number,
//     image: String
// }


function StoreItem({ id ,name, description, price, image }) {
    const quantity = 0
        return(
            <Card>
                <Card.Img variant="top" src={image} height="200px"  style={{objectFit:"cover"}} />
                <Card.Body className="d-flex dlex-column">
                    <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4 " >
                        <span className="fs-2">{name}</span>
                        <span className="ms-2 text-muted">{description}</span>
                        <span className="ms-2 text-muted ">{ formatCurrency(price)}</span>

                    </Card.Title>
                    <div className="mt-auto">
                        {quantity === 0 ? (
                            <Button className="w-100">+add</Button>
                        ):<div className="d-flex algin-items-center flex-column" style={{ gap: ".5rem"}}>
                            <div className="d-flex algin-items-center justify-content-cemter" style={{gap:".5rem"}}>
                                <Button>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div> 
                                <Button>+</Button>
                            </div>
                            <Button variant="danger" size="sm">Remove</Button>
                        </div> }
                    </div>
                </Card.Body>
            </Card>
        )
    
}
export default StoreItem;