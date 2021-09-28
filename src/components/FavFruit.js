import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import UpdateModal from './UpdateModal';

class FavFruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favArr: [],
      show: false,
      item: {}
    }
  }

  componentDidMount() {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`https://entranceexam401d31.herokuapp.com/fruits/${email}`)
      .then(result => {
        this.setState({
          favArr: result.data
        })
        console.log(this.state.favArr);
      })
  }

  deleteData(id) {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`https://entranceexam401d31.herokuapp.com/fruits/${id}?email=${email}`)
      .then(result => {
        console.log(result);
        this.setState({
          favArr: result.data
        })
      })
  }
  showModal = (item) => {
    this.setState({
      show: true,
      item: item,
      id:item._id
    })
    
  }
  handleClose = () => {
    this.setState({
      show: false,
    })
  }
  updateData=(e)=>{
    e.preventDefault();
    const {user}= this.props.auth0;
    const obj={
      name:e.target.name.value,
      image:e.target.image.value,
      price:e.target.price.value,
      email:user.email
    }
    axios
    .put(`https://entranceexam401d31.herokuapp.com/fruits/${this.state.id}`, obj)
    .then(result=>{
      this.setState({
        favArr: result.data,
        show: false,
      })
    })
  }
  render() {
    return (
      <>
        <h1>My Favorite Fruits</h1>
        <UpdateModal
          show={this.state.show}
          handleClose={this.handleClose}
          item={this.state.item}
          updateData={this.updateData}
        />
        <Row xs={1} md={3} className="g-4">
          {this.state.favArr.map(item => {
            return (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Price: {item.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.showModal(item)}>Update</Button>
                    <Button variant="danger" onClick={() => this.deleteData(item._id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </Col>)
          })}

        </Row>

      </>
    )
  }
}

export default withAuth0(FavFruit);
