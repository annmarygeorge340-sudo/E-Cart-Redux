import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div className='m-5 p-5'>
            <div className="row pt-5">
                {/* duplicate columm accorfding to product */}
                <div className="col-3">
                    {/* cards */}

                    <Card>
                        <Card.Img className='shadow' style={{height:"250px"}} variant="top" src="https://t4.ftcdn.net/jpg/06/99/14/49/360_F_699144970_uQxDMy5w9G4M9j9IviSEuwtDiYeuXxk2.jpg" />
                        <Card.Body className='text-center'>
                            <Card.Title>Lipstick</Card.Title>
                            <Link to={`/Products/:id`} className='btn btn-info'>View More</Link>
                          </Card.Body>
                    </Card>

                </div>

            </div>
        </div>
    )
}

export default Products
