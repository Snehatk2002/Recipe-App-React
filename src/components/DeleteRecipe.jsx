import React, { useState } from 'react'
import Navbar from './Navbar'

const DeleteRecipe = () => {
    const [data, setData] = useState(
        {
            "recipeid": "",
            
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        
    }
  return (
    <div>
        <Navbar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">RECIPE ID</label>
                            <input type="text" className="form-control" name='recipeid' value={data.recipeid} onChange={inputHandler}  />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-danger" onClick={readValue}>DELETE</button> 
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteRecipe