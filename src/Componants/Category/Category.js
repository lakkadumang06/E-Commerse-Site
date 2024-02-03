import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = ({ data }) => {
    return (
        <div className='Category'>
            <Link to="/" className='nav-link'>
                <div className='list-main-cat'>
                    All Category
                </div>
            </Link>
            {
                data.map((item) => {
                    return (
                        <>
                            <Link to={`/${item}`} className='nav-link'>
                                <div className='list-cat'>
                                    {item}
                                </div>
                            </Link>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Category
