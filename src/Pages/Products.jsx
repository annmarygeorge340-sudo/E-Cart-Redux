import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../Redux/Slices/ProductSlice';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';


function Products() {

    const { loading, allProducts, error } = useSelector(state => state.productReducer)

    const dispatch = useDispatch()

    const [currentPage,setCurrentPage] = useState(1)
    const productPerPage = 8
    const totalPages = Math.ceil(allProducts.length/productPerPage)
    const currentPageLastIndex = currentPage* productPerPage
    const currentPageFirstIndex = currentPageLastIndex-productPerPage
    const visibleProductArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

const navigateNextPage = ()=>{
    currentPage !=totalPages && setCurrentPage(currentPage+1)
}

const navigatePreviousPage = ()=>{
    currentPage != 1 && setCurrentPage(currentPage-1)
}

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <>
            <Header  insideProduct/>
            
            <div className='m-5 p-5'>
                {
    
    
                    loading ?
                        <div className='text-center py-5 fw-bolder'>loading...</div>
                        : <div className="row pt-5">
                            {/* duplicate columm accorfding to product */}
                            {
                                allProducts.length > 0 ?
                                   visibleProductArray.map(product => (
    
                                        <div key={product?.id} className="col-3">
                                            {/* cards */}
    
                                            <Card className='shadow p-2 mb-3'>
                                                <Card.Img  style={{ height: "250px" }} variant="top" src={product?.thumbnail}/>
                                                <Card.Body className='text-center'>
                                                    <Card.Title>{product.title}</Card.Title>
                                                    <Link to={`/Products/${product?.id}`} className='btn btn-info'>View More</Link>
                                                </Card.Body>
                                            </Card>
    
                                        </div>
                                    ))
                                    :
                                    <div className='fw-bolder'>No Products Found</div>
                            }
    
                        </div>
                }

                <div className='text-center fs-4 fw-bold my-5'>
                    <button onClick={ navigatePreviousPage} className='btn'><FontAwesomeIcon icon={ faBackward} /></button>
                      
                      {currentPage} of {totalPages}

                   <button onClick={navigateNextPage} className='btn'><FontAwesomeIcon icon={faForward} /></button>

                </div>
            </div>
        </>
    )
}

export default Products
