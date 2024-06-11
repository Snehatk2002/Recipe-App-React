import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewRecipe = () => {
    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
            }
        ).finally()

    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                                    {data.map(
                                        (value,index)=>{
                                            return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img src={value.image} class="card-img-top" alt="..." height="200px"></img>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.recipeid}</h5>
                                                        <p class="card-text">{value.recipename}</p>
                                                        <p class="card-text">{value.ingredients}</p>
                                                        <p class="card-text">{value.description}</p>
                                                    </div>
                                            </div>
                                        </div>
                                        }
                                     )}
                                        
                                     
                                     </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    

export default ViewRecipe