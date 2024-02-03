import React, { useEffect, useState } from 'react'
import './Section.css'
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';


const Section = ({ title }) => {
    const [data, setData] = useState(null)
    const [searchdata, setsearchdata] = useState()

    const onSearch = (value) => {
        setsearchdata(value)
        axios.get(`https://dummyjson.com/products/search?q=${searchdata}`)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        
    }


    useEffect(() => {
        let url;
        if (!title) {
            url = 'https://dummyjson.com/products?limit=100&skip=0';
        } else {
            url = `https://dummyjson.com/products/category/${title}`;
        }

        axios.get(url)
            .then(function (response) {
                // handle success
                // console.log(response);
                setData(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [title])


    return (
        <>
            <div className="Section">
                <div className="cart">
                    <div className="heading">
                        <h2>YOUR PRODUCT</h2>
                    </div>
                    <div className="seeach">
                        <input type="search" placeholder='Enter Search value' onChange={(e) => onSearch(e.target.value)} />
                    </div>
                </div>
                {
                    data == null
                        ?
                        <div className='loader-react d-flex align-items-center justify-content-center'>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden ">Loading...</span>
                            </Spinner>
                        </div>
                        :
                        data.products.map((item) => {
                            return (
                                <>
                                    <Link className=' nav-link' to={`/products/${item.id}`} >
                                        <div className="item my-4 col-12 d-flex align-items-center justify-content-between">
                                            <div className="item-image col-4 overflow-hidden">
                                                <img src={item.thumbnail} alt="" className='w-100 object-fit-cover' />
                                            </div>
                                            <div className="item-info col-8">
                                                <h3 style={{ color: "var(--theme-color)" }} >{item.title}</h3>
                                                <p>{item.description}</p>
                                                <h4 style={{ color: "var(--theme-color)" }}>{item.brand} - <span style={{ color: "black" }}> {item.category} </span> </h4>
                                                <h5>${item.price} <span> <strike style={{ color: "red" }}>${item.price * 1.5}</strike></span> <span>({item.discountPercentage}% Off)</span> </h5>
                                                <div className='p-1 d-flex'>
                                                    <div className="rating">
                                                        {item.rating}<FaStar className='ms-2' />
                                                    </div>
                                                    <div className="cart-btn">
                                                        <button className='ms-4'>Add Cart</button>
                                                        <button className='ms-4'><Link className=' nav-link' to={`/products/${item.id}`} >More</Link></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Section
