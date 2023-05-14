import React, { useState, useEffect } from 'react'
import "../dropbox2/dropdown2.css";

const sector_array = [{ option1: "Financials" }, { option1: "Energy" }
];

const Dropdown2 = (props) => {
    const [sector, setSector] = useState([]);

    console.log(props.financials);

    useEffect(() => {
        setSector(sector_array);
    }, [])


    const changeFunc = (val) => {
        if (val == "Energy") {
            props.setEnergy(!props.energy);
        }
        else if (val == "Financials") {
            props.setFinancials(!(props.financials))
        }
    }





    return (
        <div className='dropdown'>
            <form className='form'>
                {
                    sector.map((sector) => (
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' onClick={() => changeFunc(sector.option1)} />
                            <label className='label-stock'>{sector.option1}</label>
                        </div>
                    ))
                }

            </form>
        </div>
    )
}

export default Dropdown2