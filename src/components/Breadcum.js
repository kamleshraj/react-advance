import React from 'react'

const Breadcum = (props) => {
  return (
    <div className='breadcum-main bg-light p-2'>
        <div className='container'>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{props.urlLink}</li>
            </ol>
        </nav>
        </div>
    </div>
  )
}

export default Breadcum