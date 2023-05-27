import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/status';


const Product = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);

    // const [products, getProducts] = useState([]);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result));
        dispatch(getProducts());
    }, []);

    if (status === StatusCode.LOADING) {
        return <h1 style={{marginTop: '200px'}}>Loading...</h1>

    }

    if (status === StatusCode.ERROR) {
        return <h1 style={{marginTop: '200px', color: 'red'}}>Error Big Time!</h1>
    }

    const addToCart = (product) => {
        dispatch(add(product));
    }

    const cards = products.map((product) => (
        <div className='col-md-3' style={{ marginBottom: '30px' }} key={product.id}>
            <Card style={{ width: '18rem', margin: 'auto' }} className='h-100'>
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
                    <Button variant="primary" style={{ background: 'green', border: 'none'}}
                    onClick={() => addToCart(product)}
                    >Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </>
    )
}

export default Product
