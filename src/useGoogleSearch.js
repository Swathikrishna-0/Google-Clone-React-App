import {useState,useEffect} from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "4cc9082b5a65c3262";

const useGoogleSearch = (term) => {
  const [data,setData] = useState(null);
  useEffect(() =>{
    const fetchData = async() => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then(response => response.json())
      .then(result =>{
        setData(result)
      })
    }
    fetchData();
  },[term]);  {/*Data Layer */}

  return {data};

};


{/* 4cc9082b5a65c3262 */}
export default useGoogleSearch