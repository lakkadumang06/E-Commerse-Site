import React, { useEffect, useState } from "react";
import "./Pview.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Header from "../Header/Header";

const Pview = () => {
    const [Productview, setProductview] = useState([]);
    const [img, setImg] = useState(0);

    const param = useParams();

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${param.id}`)
            .then(function (response) {
                setProductview(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    console.log(Productview);

    return (
        <div>
            <Header />
            <div className="Pview pt-5">
                <div className="row m-0 p-5">
                    <div className="pimage">
                        {Productview.images && Productview.images.length > 0 ? (
                            <div className="row">
                                <div className="main-img col-6">
                                    <img
                                        src={Productview.images[img]}
                                        alt=""
                                        className="w-100 object-fit-cover"
                                    />
                                </div>
                                <div className="pimage-info col-6">
                                    <h3 style={{ color: "var(--theme-color)" }}>
                                        {Productview.title}
                                    </h3>
                                    <p>{Productview.description}</p>
                                    <h4 style={{ color: "var(--theme-color)" }}>
                                        {Productview.brand} -{" "}
                                        <span style={{ color: "black" }}>
                                            {" "}
                                            {Productview.category}{" "}
                                        </span>{" "}
                                    </h4>
                                    <h5 className="mt-4">
                                        ${Productview.price}{" "}
                                        <span>
                                            {" "}
                                            <strike style={{ color: "red" }}>
                                                ${Productview.price * 1.5}
                                            </strike>
                                        </span>{" "}
                                        <span>({Productview.discountPercentage}% Off)</span>{" "}
                                    </h5>
                                    <div className="p-1 d-flex">
                                        <div className="rating">
                                            {Productview.rating}
                                            <FaStar className="ms-2 mb-1" />
                                        </div>
                                    </div>
                                    <div className="pview-btn mt-3">
                                        <button>Add Cart</button>
                                        <button className="ms-3">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>loading....</p>
                        )}
                    </div>
                    <div className="row d-flex">
                        {
                            Productview.images && Productview.images.length > 0 ?
                                Productview.images.map((item, index) => {
                                    return (
                                        <div className="fiveimg col mt-5">
                                            <Link>
                                                <img
                                                    src={item}
                                                    alt=""
                                                    onClick={() => setImg(index)}
                                                    className="w-100 object-fit-cover mb-4"
                                                />
                                            </Link>
                                        </div>
                                    )
                                })

                                : (
                                    <p>loading....</p>
                                )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pview;
