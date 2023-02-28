import React from 'react'
import './Home.css'
import { useEffect, useState } from "react"
import axios from "axios"
import shop from '../public/shop.png'
import Typewriter from 'typewriter-effect';

import ProductCard from './ProductCard';

const Home = () => {

    const API = "https://fakestoreapi.com/products";

    const sampleData = [];
    const [marketData, updateMarketData] = useState(sampleData);
    // eslint-disable-next-line no-unused-vars
    const [marketDataFetched, marketUpdateFetched] = useState(false);
    const getProducts = async (url) => {
        const res = await axios.get("https://fakestoreapi.com/products");
        const products = await res.data;
        // console.log(products);
        marketUpdateFetched(true);
        updateMarketData(products);
        return products;
    };
    useEffect( () => { 
        getProducts(API);
    }, []);

    return (
        <div className="home-body">
            <div className="column1">
                <div className="header">
                    <Typewriter onInit={(typewriter)=> { typewriter
                        .typeString("Your one-stop grocery destination")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcome to Powstik")
                        .start();
                        }}
                    />
                </div>
                <div className="filter-box">
                    <b>Search by Category:</b><br/><br/>
                    <a className="category" href='/'>Lentils</a><br/>
                    <a className="category" href='/'>Vegetables</a><br/>
                    <a className="category" href='/'>Fruits</a><br/>
                    <a className="category" href='/'>Supplements</a><br/>
                </div>
            </div>
            <div className="columnline"/>
            <div className="column2">
            <div className="home-block">
                <div className="homeTitles">
                    <img src={shop} alt=""
                        style={{ height: '40px', width: 'auto', marginRight: '15px', marginBottom: '12px'}}
                    />
                    Products
                </div>
                <div className="product-container">
                    {marketData.map((value, index) => {
                        return (
                            <ProductCard data={value} key={index}></ProductCard>
                        );
                    })}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
