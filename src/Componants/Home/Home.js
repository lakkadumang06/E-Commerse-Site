import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Category from '../Category/Category'
import Section from '../Section/Section'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import './Home.css'

const Home = () => {
    const [data, setData] = useState(null)

    const { title } = useParams()

    useEffect(() => {

        axios.get('https://dummyjson.com/products/categories/')
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])


    return (
        <div>
            {
                data == null ?
                <div className='loader-react'>
                 <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </div> 
                :
                    <>
                        <Header/>
                        <div className='row w-100 position-relative pt-5'>
                            <div className='Category-part col-3'>
                                {data != null && <div className='main-sidemenu'> <Category data={data} />  </div>}
                            </div>
                            <div className='section-part col-9'>
                                <Section title={title}></Section>
                            </div>
                        </div>
                    </>
            }
          
        </div>
    )
}

export default Home