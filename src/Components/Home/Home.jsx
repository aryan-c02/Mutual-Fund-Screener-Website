import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import "./Home.css"
import "./Home2.css"
import Dropdown from '../dropbox/Dropdown.jsx'
import Dropdown2 from '../dropbox2/Dropdown2.jsx'
import stock_universe_array from '../../Data/stock Universe'
import Slider from '../Slider/Slider.jsx'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';





const Home = () => {

  const [stockUni, setStockUni] = useState(0);
  const [sector, setSector] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [energy, setEnergy] = useState(0);
  const [financials, setFinancials] = useState(0);
  const [finalTable, setFinalTable] = useState([]);
  const [nifty50, setNifty50] = useState(0);
  const [nifty100, setNifty100] = useState(0);
  const [nifty500, setNifty500] = useState(0);


  const current = new Date();
  const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();


  const getTableData = async (url) => {
    try {
      const res = await fetch(url);
      const meraData = await res.json();
      setTableData(meraData);
      // setFinalTable(meraData);

    } catch (error) {
      console.log(error);
    }
  }


  const sendingTable = async (energy, financials, nifty50, nifty100, nifty500) => {

    // if (energy == 0 && financials == 0) {
    //   console.log("1")
    //   setFinalTable(tableData);
    // }
    // else if (energy == 1 && financials == 0) {
    //   console.log("2")
    //   setFinalTable(tableData.filter((data) => {
    //     return (data.sector === "Energy");
    //   }))
    // }
    // else if (energy == 0 && financials == 1) {
    //   console.log("3")
    //   setFinalTable(tableData.filter((data) => {
    //     return data.sector === "Financials";
    //   }))
    // }
    // else {
    //   console.log("4")
    //   setFinalTable(tableData.filter((data) => {
    //     return (data.sector === "Financials" || data.sector == "Energy");
    //   }))
    // }

    setFinalTable(tableData.filter((data) => {
      return ((energy == 1 && data.sector == "Energy") ||
        (financials == 1 && data.sector == "Financials") ||
        (nifty50 == 1 && data.uni == "NIFTY 50") ||
        (nifty100 == 1 && data.uni == "NIFTY 100") ||
        (nifty500 == 1 && data.uni == "NIFTY 500"))
    }))



  }

  console.log(tableData);




  useEffect(() => {
    getTableData("https://mocki.io/v1/fd631b3a-199e-47d6-822c-bcfa98b0bcef");
    sendingTable(energy, financials, nifty50, nifty100, nifty500);
  }, [energy, financials, nifty50, nifty100, nifty500])


  const resetAll = () => {
    setEnergy(0);
    setFinancials(0);
    setSector(0);
    setStockUni(0);
    setNifty100(0);
    setNifty50(0);
    setNifty500(0);
  }


  return (
    <>
      <Slider />
      <Navbar />

      <div id='Home-div'>

        <div className='left'>

          <div className='table-top left-filters '> <div className='new-screens'>New Screen</div>
            <button className='save-btn'>Save</button>
          </div>


          <div className='table-top left-filters Filters-count-div '> <div className='new-screens filters-count-div-child '>No filters Applied</div>
            <button className='reset-btn save-btn' onClick={resetAll}>Reset All</button>
          </div>


          <div className='left-overflow' >
            <div className='father-stock-uni' onClick={() => { setStockUni(!stockUni) }} >
              <div className='left-filters left-child stock-uni'>
                <div className='stock-uni-write'> Stock Universe </div>
                <div className='downward-icon'> <KeyboardArrowDownIcon /></div>

              </div>
            </div>

            {
              !!stockUni && <Dropdown nifty50={nifty50} setNifty50={setNifty50}
                nifty100={nifty100} setNifty100={setNifty100}
                nifty500={nifty100} setNifty500={setNifty500} />
            }



            <div className='left-filters sector-div' onClick={() => { setSector(!sector) }}>
              <div className='left-filters left-child stock-uni'>
                <div className='stock-uni-write'> Sector </div>
                <div className='downward-icon'> <KeyboardArrowDownIcon /></div>

              </div>
            </div>
            {
              !!sector && <Dropdown2 energy={energy} financials={financials} setEnergy={setEnergy}
                setFinancials={setFinancials} />
            }


            <div className='left-filters left-child stock-uni'>
              <div className='stock-uni-write'> MarketCap (Cr) </div>
              <div className='downward-icon'> <KeyboardArrowDownIcon /></div>

            </div>
            <div className='left-filters left-child stock-uni'>
              <div className='stock-uni-write'> Close Price (Rs) </div>
              <div className='downward-icon'> <KeyboardArrowDownIcon /></div>

            </div>
            <div className='left-filters left-child stock-uni'>
              <div className='stock-uni-write'> PE - Ratio </div>
              <div className='downward-icon'> <KeyboardArrowDownIcon /></div>

            </div>

            <div className='empty-div'></div>
          </div>
          <div className='Add-filter-btn'>
            <button className='add-filter-button'> + Add Filter</button>
          </div>


        </div>

        {/* right side view */}

        <div className='right'>

          <div className='table-top'>
            <div className='showing-results'>
              <span > Showing <b> {(finalTable.length == 0 && tableData.length == 0) ? 0 : 1} -{finalTable.length == 0 ? tableData.length : finalTable.length} </b> of<b> {tableData.length} </b>results </span><br></br> <span className='time-span'> last update {time} IST </span>

            </div>

            <div className='showing-results-end'>
              <div className='info-icon'> <InfoOutlinedIcon /></div>
              <div><button className='Export-Button'  >Export</button></div>
            </div>
          </div>

          <div className='table-div'>
            <table className='data-table'>
              <tr className='heading-row main-heading-row'>
                <th className='row0 first'><AddToPhotosOutlinedIcon /></th>
                <th className='row1  second' style={{ fontWeight: "800" }} > <span className='heading-row-spans'>Name</span></th>
                <th className='row1 third' style={{ fontWeight: "500" }} ><span className='heading-row-spans'>Sub Sector</span></th>
                <th className='row1 fourth ' style={{ fontWeight: "800" }} > <span className='downward-arrow'> <ArrowDownwardOutlinedIcon /> </span><span className='arrow-div'> Market-Cap </span></th>
                <th className='row1 fifth' style={{ fontWeight: "500" }} ><span className='heading-row-spans'>Close-Price</span></th>
                <th className='row0 six pe-div'><span className='heading-row-spans'>PE-Ratio</span></th>
              </tr>


              {finalTable.map((val, key) => {

                return (
                  <tr className='heading-row right-one compelete-row' key={key}>

                    <td className='row0  first'><span>{key + 1}</span></td>
                    <td className='row1  second ' ><span className='right-one name-row blue-hona-hai'>{val.name}</span></td>
                    <td className='row1 third'><span>{val.subsector}</span></td>

                    <td className='row1 fourth even'><span>{val.marketCap}</span></td>
                    <td className='row1 fifth'  ><span>{val.closePrice}</span></td>
                    <td className='row0 six even'><span>{val.pe}</span></td>

                  </tr>
                )
              })}
              {
                (energy == 0 && financials == 0 && nifty50 == 0
                  && nifty100 == 0 && nifty500 == 0) && finalTable.length == 0 && tableData.map((val, key) => {

                    return (
                      <tr className='heading-row right-one compelete-row' key={key}>

                        <td className='row0  first'><span>{key + 1}</span></td>
                        <td className='row1  second ' ><span className='right-one name-row blue-hona-hai'>{val.name}</span></td>
                        <td className='row1 third'><span>{val.subsector}</span></td>

                        <td className='row1 fourth even'><span>{val.marketCap}</span></td>
                        <td className='row1 fifth'  ><span>{val.closePrice}</span></td>
                        <td className='row0 six even'><span>{val.pe}</span></td>

                      </tr>
                    )
                  })
              }

            </table>

          </div>

        </div>
      </div >
    </>
  )
}

export default Home