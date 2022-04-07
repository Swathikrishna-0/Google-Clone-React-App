import React,{useState} from 'react';
import './Search.css';
import {IoIosSearch} from 'react-icons/io';
import {IoMdMic} from 'react-icons/io';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';


function Search({hideButtons = false}) {
  const [{},dispatch] = useStateValue();
  const [input,setInput] = useState("");
  const history = useHistory();

  const search = e => {
    e.preventDefault();
    console.log("You hit the search button",input);

    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })

    history.push('/search')
  }

  return (
    <form className="search">

      <div className="search__input">
        <IoIosSearch className="search__inputIcon"/>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <IoMdMic className="search__micIcon"/>
      </div>

      {!hideButtons ? (
         <div className="search__buttons">
         <Button type="submit" onClick={search}>Google Search</Button>
         <Button>I'm Feeling Lucky</Button>
       </div>
      ): (
        <div className="search__buttons">
        <Button type="submit" onClick={search} className="search__buttonsHiddens">Google Search</Button>
        <Button className="search__buttonsHiddens">I'm Feeling Lucky</Button>
      </div>
      )}

      

    </form>
  )
}

export default Search