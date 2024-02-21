import React, { useRef } from 'react';
import { FaSearch, FaShoppingCart, FaGoogle, FaWikipediaW, FaYoutube, FaFilePowerpoint, FaHeadphones } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchText.current.value.trim();
    if (searchTerm === '') {
      setSearchTerm("Wings of Fire");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchTerm);
    }
    navigate("/book");
  };

  const handleAmazonSearch = () => {
    const searchTerm = searchText.current.value.trim();
    if (searchTerm) {
      window.location.href = `https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}`;
    }
  };

  const handleGoogleSearch = () => {
    const searchTerm = searchText.current.value.trim();
    if (searchTerm) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, "_blank");
    }
  };

  const handleWikipediaSearch = () => {
    const searchTerm = searchText.current.value.trim();
    if (searchTerm) {
      window.open(`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(searchTerm)}`, "_blank");
    }
  };

  const handleYoutubeSearch = () => {
    const searchTerm = searchText.current.value.trim();
    if (searchTerm) {
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`, "_blank");
    }
  };

  const handlePPTSearch = () => {
    const searchTerm = searchText.current.value.trim();
    if (searchTerm) {
      window.open(`https://www.slideshare.net/search/slideshow?searchfrom=header&q=${encodeURIComponent(searchTerm)}`, "_blank");
    }
  };

  const handleAudioBookSearch = () => {
    const searchTerm = searchText.current.value.trim();
    if (searchTerm) {
      window.open(`https://play.google.com/store/search?q=${encodeURIComponent(searchTerm)}&c=books`, "_blank");
    }
  };
  
  
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type="text" className='form-control' placeholder='Wings Of Fire ...' ref={searchText} />
              <button type="submit" className='flex flex-c' onClick={handleSubmit} title="Search">
                <FaSearch className='text-purple' size={32} style={{ marginLeft: '20px' }} />
              </button>
              <button type="button" className='flex flex-c' onClick={handleAudioBookSearch} title="Listen to Audiobooks">
                <FaHeadphones className='audio-icon' size={32} style={{ marginLeft: '20px' }} />
              </button>
              <button type="button" className='flex flex-c' onClick={handleAmazonSearch} title="Shop on Amazon">
                <FaShoppingCart className='shopping-icon' size={32} style={{ marginLeft: '20px' }} />
              </button>
              <button type="button" className='flex flex-c' onClick={handleGoogleSearch} title="Search on Google">
                <FaGoogle className='search-icon' size={32} style={{ marginLeft: '20px' }} />
              </button>
              <button type="button" className='flex flex-c' onClick={handleWikipediaSearch} title="Search on Wikipedia">
                <FaWikipediaW className='search-icon' size={32} style={{ marginLeft: '20px' }} />
              </button>
              <button type="button" className='flex flex-c' onClick={handleYoutubeSearch} title="Search on YouTube">
                <FaYoutube className='search-icon' size={32} style={{ marginLeft: '20px' }} />
              </button>
              <button type="button" className='flex flex-c' onClick={handlePPTSearch} title="Search for PowerPoint Presentations">
                <FaFilePowerpoint className='ppt-icon' size={32} style={{ marginLeft: '20px' }} />
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
