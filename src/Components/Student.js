import React, { useState } from 'react'

const Student = () => {
    var [name,setName]=useState("Rahul")
    var [age,setAge]=useState("32")
    var [college,setCollege]=useState("mzc")
    const newName=()=>{
        setName(name="mohan")
            setAge(age="35")
        
            setCollege( college="mountzion" )
        

    }
    
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl- col-xxl-6">
                    <label for="" className="form label">name</label>
                    <label for="" className="form label">{name}</label>


                </div>
            
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl- col-xxl-6">
                    <label for="" className="form label">age</label>
                    <label for="" className="form label">{age}</label>
                </div>
             
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form label">College</label>
                    <label for="" className="form label">{college}</label>
                
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl- col-xxl-6">
                    <button onClick={newName} className="btn btn-success">change</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Student