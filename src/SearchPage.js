import React from 'react';
import './SearchPage.css';
import {useStateValue} from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import {Link} from 'react-router-dom';
import Search from './components/Search';
import {IoIosSearch} from 'react-icons/io';
import {RiFileTextFill} from 'react-icons/ri';
import {MdImage} from 'react-icons/md';
import {BsFillTagFill} from 'react-icons/bs';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FiMoreVertical} from 'react-icons/fi';

function SearchPage() {
  const [{term},dispatch] = useStateValue();
  const {data} = useGoogleSearch(term); //LIVE API Call

  //const data = Response;

  console.log(data)

  return (
    <div className="searchPage">

      <div className="searchPage__header">
        <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" className="searchPage__logo" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons/>

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <IoIosSearch/>
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <RiFileTextFill/>
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <MdImage/>
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <BsFillTagFill/>
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <FaMapMarkerAlt/>
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <FiMoreVertical/>
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>

        </div>
      </div>


    {term &&(
      <div className="searchPage__results">
        <p className="searchPage__resultCount">About {data?.searchInformation.formattedTotalResults} results
        ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>

        {data?.items.map(item => (
          <div className="searchPage__result">
            <a href={item.link} className="searchPage__resultLink">
              {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>
              )}

              {item.displayLink} ▽
            </a>
            <a href={item.link} className="searchPage__resultTitle">
              <h2>{item.title}</h2>
            </a>
            <p className="searchPage__resultSnippet">{item.snippet}</p>
          </div>
        ))}

      </div>
    )}
      
     

    </div>
  )
}

export default SearchPage
