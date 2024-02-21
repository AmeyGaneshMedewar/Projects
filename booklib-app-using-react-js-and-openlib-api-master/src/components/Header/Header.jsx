import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to our book discovery app, where adventure awaits on every page. Explore a diverse collection of books across genres and topics, curated just for you. Whether you're searching for gripping thrillers, heartwarming romances, or thought-provoking non-fiction, our app has something for everyone. Dive in today and discover your next favorite read!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header