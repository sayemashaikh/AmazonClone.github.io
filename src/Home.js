//Home.js
import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

            <div className="home--row">
            <Product 
                id="01"
                title= "See U in C by Ali Karim Sayed (Author)"
                price={4450}
                image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                />
            <Product 
                id="02"
                title= "Noise ColorFit Pro 2 Full Touch Control Smart Watch"
                price={2799.00}
                image="https://m.media-amazon.com/images/I/61xzuXWWozS._SY355_.jpg"
                />
            <Product 
                id="03"
                title= "Apple iPhone 11 (64GB) - Black"
                price={50999.00}
                image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SX569_.jpg"
                />
            <Product 
                id="04"
                title= "OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)"
                price={43998.00}
                image="https://m.media-amazon.com/images/I/61lwWVDDQ7S._SL1500_.jpg"
            />
            
            </div>
            <div className="home--row">
            <Product 
              id="05"
              title= "Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO "
              price={16999}
              image="https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg" 
            />
            <Product 
            id="06"
            title= "Melomane Opera Wireless Bluetooth Headphones with Hi-Fi Mic"
            price={2999}
            image="https://m.media-amazon.com/images/I/71I+UCgT3qL._SL1500_.jpg"
            />
            </div>
            <div className="home--row">
            <Product />
            </div>

          </div>  
        </div>
    )
}

export default Home