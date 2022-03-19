import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const PRODUCTS_URL = 'http://localhost:8080';

    const fetchData = async () => {
        const response = await axios.get(PRODUCTS_URL);
        const resdata = await response.data.guitars;
        setData(resdata);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <div className="header">
                <h3> Thomman </h3>
                <input placeholder="search" />
            </div>
            <h1>Single Cut Guitars</h1>
            {console.log(data[0])}
            {data.length > 0 ? (
                data.map((guitar, index) => (
                    <div key={index} className="product">
                        <a className="product__image" href={guitar.thumbnail}>
                            <picture>
                                <source srcSet={guitar.thumbnail} type="image/webp" />
                                <img src={guitar.thumbnail} alt={guitar.name} width="220px" height={'220px'} />
                            </picture>
                        </a>
                        <div className="product__details">
                            <div>{guitar.name}</div>
                            <div>{guitar.price}</div>
                            <div>{guitar.rating}</div>
                            <div>{guitar.currency}</div>
                            <div>{guitar.manufacturer}</div>
                            <div>{guitar.reviews}</div>
                            <div>{guitar.price}</div>
                            <div>{guitar.is_in_stock ? `In Stock` : `Out of Stock`}</div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No Products found.</div>
            )}
        </div>
    );
}

export default App;
