import React, { useEffect, useState } from 'react';
import "../dropbox/Dropdown.css"
const stock_universe_array = [{
    option1: "NIFTY 50"
}, { option1: "NIFTY 100" }, { option1: "NIFTY 500" }
];

const Dropdown = (props) => {

    const [stock, setStock] = useState([]);

    useEffect(() => {
        setStock(stock_universe_array);
    }, [])



    const universe_filter = (value) => {
        if (value == "NIFTY 50") {
            props.setNifty50(!props.nifty50);
        }
        else if (value == "NIFTY 100") {
            props.setNifty100(!props.nifty100);
        }
        else if (value == "NIFTY 500") {
            props.setNifty500(!props.nifty500);
        }
    }

    console.log(props.nifty50);
    console.log(props.nifty100);


    return (
        <div className='dropdown'>
            <form className='form'>
                {
                    stock.map((stock) => (
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' onClick={() => { universe_filter(stock.option1) }} />
                            <label className='label-stock'>{stock.option1}</label>
                        </div>
                    ))
                }

            </form>
        </div>
    )
}

export default Dropdown