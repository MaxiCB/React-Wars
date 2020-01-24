import React, {useState, useEffect} from 'react';
import axios from "axios";

const  App = () => {

  const [apiData, setApiData] = useState([]);
  const [pageQuery, setPageQuery] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
      .get(`https://swapi.co/api/people/?page=${pageQuery}`)
      .then(res => {
        setApiData(res.data['results'])
        setIsLoading(false);
        console.log(res.data['results']);
      })
      .catch(err => console.log(err));
    };
    fetchData();
  }, [pageQuery])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
