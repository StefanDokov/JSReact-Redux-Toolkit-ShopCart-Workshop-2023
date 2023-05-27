import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const cartProducts = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch(remove(id));
    }

    const cards = cartProducts.map((product) => (
        <div className="col-md-12" style={{ marginBottom: '30px' }} key={product.id}>
            <Card style={{ width: '90%', margin: 'auto' }} className='h-100'>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        $: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" style={{ background: 'brown', border: 'none'}}
                    onClick={() => removeFromCart(product.id)}
                    >Remove</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

  return (
    <div className="row">
      {cartProducts.length > 0? cards : (<div style={{margin: '200px auto'}}><h1>No Products Yet!</h1></div>)}
    </div>
  )
}

export default Cart
