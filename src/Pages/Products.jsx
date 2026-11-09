import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../Redux/Slices/ProductSlice';


function Products() {

    const { loading, allProducts, error } = useSelector(state => state.productReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div className='m-5 p-5'>
            {


                loading ?
                    <div className='text-center py-5 fw-bolder'>loading...</div>
                    : <div className="row pt-5">
                        {/* duplicate columm accorfding to product */}
                        {
                            allProducts.length > 0 ?
                                allProducts.map(product => (

                                    <div key={product?.id} className="col-3">
                                        {/* cards */}

                                        <Card className='shadow p-2 mb-3'>
                                            <Card.Img  style={{ height: "250px" }} variant="top" src={product?.thumbnail}/>
                                            <Card.Body className='text-center'>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Link to={`/Products/$(product?.id)`} className='btn btn-info'>View More</Link>
                                            </Card.Body>
                                        </Card>

                                    </div>
                                ))
                                :
                                <div className='fw-bolder'>No Products Found</div>
                        }

                    </div>
            }
        </div>
    )
}

export default Products
