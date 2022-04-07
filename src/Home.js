import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {IoApps} from 'react-icons/io5';
import {IoPersonCircle} from 'react-icons/io5';
import Search from './components/Search';

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to='about'>About</Link>
          <Link to='store'>Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to='gmail'>Gmail</Link>
          <Link to='images'>Images</Link>
          <IoApps className="io-apps-icon"/>
          <IoPersonCircle className="avatar-icon"/>
        </div>
      </div>

      <div className="home__body">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
          <div className="home__inputContainer">
            <Search />
          </div>
      </div>
    </div>
  )
}

export default Home