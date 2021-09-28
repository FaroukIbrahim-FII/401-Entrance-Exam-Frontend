import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Row,Col} from 'react-bootstrap'

import FruitItem from './FruitItem'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArr: [],
    }
  }
  componentDidMount() {
    // const url = "http://localhost:3001/fruits"
    axios
      .get("https://entranceexam401d31.herokuapp.com/fruits")
      .then(result => {
        this.setState({
          allArr: result.data,
        })
        console.log(this.state.allArr);
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <Row xs={1} md={3} className="g-4">
          {this.state.allArr.map(item => {
            return(
            <Col>
            <FruitItem
            item={item}
            />
            </Col>
            )
          })}
        
        </Row>
        

      </>
    )
  }
}

export default Home;
