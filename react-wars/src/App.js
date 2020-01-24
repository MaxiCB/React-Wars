import React, {useState, useEffect} from 'react';
import axios from "axios";

// Components
import { Container, Col, Row, Pagination, PaginationItem, PaginationLink, Spinner } from 'reactstrap'; 
import PersonCard from './components/PersonCard';

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

  const onChangePage = (pageNum) => {
    if(pageNum > 0 && pageNum < 10) {
      console.log(pageNum)
      setCurrentPage(pageNum);
      setPageQuery(pageNum);
      console.log(currentPage);
      console.log(pageNum);
    }
  }

  const max = 10;

  const createPagination = () => {
    let paginationitems = []
    for (let index = 0; index < max; index++) {
      let links = []
      for (let i = 0; i < 1; i++) {
      links.push(<PaginationLink onClick={e => onChangePage(index)}>{index}</PaginationLink>)     
      }
    paginationitems.push(<PaginationItem>{links}</PaginationItem>)
    }
    return paginationitems;
  }

  return (
    <div className="App">
      <Container fluid={true}>
        {isLoading ? <Spinner color="primary" className="spinnerClass"/> : <></>}
        <Row  xs="4" className="personRow">
        {apiData.map((item, index) => (
          <Col className="personCard" key={index}>
            <PersonCard {...item}/>
          </Col>
        ))}
        </Row>
          <Row className="paginationRow">
            <Pagination>
              <PaginationItem>
                {/* First */}
                <PaginationLink first onClick={e => onChangePage(1)}/>
              </PaginationItem>
              <PaginationItem>
                {/* Back by one */}
                <PaginationLink previous onClick={e => onChangePage(pageQuery - 1)}/>
              </PaginationItem>
              {/* Dynamic creation of pagination items */}
              {createPagination()}
              <PaginationItem>
                {/* Forward by one */}
                <PaginationLink next onClick={e => onChangePage(pageQuery + 1)} />
              </PaginationItem>
              <PaginationItem>
                {/* End */}
                <PaginationLink last onClick={e => onChangePage(9)} />
              </PaginationItem>
            </Pagination>
          </Row>
        </Container>
    </div>
  );
}

export default App;
