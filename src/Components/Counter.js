import React, { useState } from 'react'

const Counter = () => {
    var [num,setNum]=useState(0)
    const changeIncrement=()=>

    {
        setNum(num=num+1)
    }
    const changeDecrement=()=>

    {
        setNum(num=num-1)
    }
    
  return (
    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            
            <label for="" className="form label">{num}</label>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button  onClick={changeIncrement} className='btn btn-success'>increment</button>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={changeDecrement} className='btn btn-success'>decrement</button>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
  )
}

export default Counter