import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
const screenerLogo = "https://www.tickertape.in/images/svg/logos/mf-screener-by-tt-white.svg";
const searchLogo = "https://w7.pngwing.com/pngs/471/149/png-transparent-computer-icons-symbol-search-miscellaneous-black-and-white-magnifying-glass.png";

const Navbar = (tableData) => {

  console.log(tableData);

  const [show, setShow] = useState(false);

  const [showTable, setShowTable] = useState([]);
  const [query, setQuery] = useState("");

  const toshowdata = (tableData) => {

  }

  useEffect(() => {
    toshowdata(tableData);
  }, [query]);



  return (
    <div className='Navbar'>
      <div className='Navbar-child1'>
        <a href="#1"> <img className='img-screener' src={screenerLogo} placeholder='Logo' alt='logo' /> </a>
      </div>
      <div className='Navbar-child'>

        <div className='stocks-div'> Stocks <div> <UnfoldMoreIcon /></div></div>
        <div className="link-tag stocks-div" href="#">All Screens</div>
        <div className="link-tag stocks-div" href="#">New Screens</div>

      </div>

      <div className='Navbar-search '>
        <div className='search-merge-div'>
          <div className='search-icon-input'><SearchIcon /></div>
          <div className="search-input-div"><input className="input-search" placeholder='Search Stock, indices, mututal Funds' /></div>
        </div>
      </div>

      <div className='Navbar-end socials-div'>
        <div className='Article-icon-div'> <ArticleIcon /> </div>
        <div className='Socials-word-div'> Socials</div>
      </div>
      <div className='login-div-navbar'>
        {
          show && <div className='list-div'>

            <button className='login-list top-button '>Login</button>
            <button className='login-list   second-button'>Portfolio</button>
            <button className='login-list  second-button'>Basket</button>
            <button className='login-list second-button'>Watchlist</button>
            <hr className='linebreak' />

            <button className='login-list  second-button'>Go Pro</button>
            <button className='login-list second-button'>Supoort</button>

          </div>
        }


        <button className="link-tag login-tag login-button" onClick={() => { setShow(!show) }}>   Login</button>







      </div>

    </div >
  )
}

export default Navbar