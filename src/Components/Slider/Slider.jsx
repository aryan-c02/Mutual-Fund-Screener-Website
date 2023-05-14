import "../Slider/Slider.css"
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

import React, { useState, useEffect } from 'react'


const Slider = () => {

    const [tableData, setTableData] = useState([]);

    const getTableData = async (url) => {
        try {

            const res = await fetch(url);
            const meraData = await res.json();
            setTableData(meraData);


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTableData("https://mocki.io/v1/d43e550e-eef1-4332-9e8c-cabfe129fe64");
    }, [])

    console.log(tableData);


    return (
        <div className="slider-father-div">
            <div className="slider">
                {
                    tableData.map((value, key) => (
                        <div className="slider-in-div father-div">{value.name}
                            <div className="slider-in-div price-span">{value.closePrice}</div>
                            <div className="slider-in-div icon-slider"> <ChangeHistoryIcon /></div>
                            <div className="slider-in-span pe-value-div">  {value.pe}% </div> </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Slider