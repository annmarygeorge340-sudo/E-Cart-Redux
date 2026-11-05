import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
   <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>

  <img style={{height:'90vh'}} src="https://img.magnific.com/premium-vector/page-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-hand-drawn-vector-layout-template-broken-robot-vector-illustration_36380-1370.jpg?semt=ais_hybrid&w=740&q=80" alt="no img" />
    <h2>WE ARE SORRY,LOOK LIKE YOU ARE LOST</h2>
    <Link to={'/'} className='btn  p-2 mb-5'style={{ backgroundColor: '#d11212' }}>BACK TO HOME</Link>
    </div>
  )
}

export default PageNotFound
