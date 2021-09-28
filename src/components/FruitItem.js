import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
// import { Auth0Provider } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class FruitItem extends Component {
    // componentDidMount(){

    // }

    addToFav = (item) => {
        const {user}=this.props.auth0;
        // const {name,image,price,email}=req.body;
        const obj={
            name:item.name,
            image:item.image,
            price:item.price,
            email:user.email
        }
        // console.log(obj);
        axios
        .post("https://entranceexam401d31.herokuapp.com/fruits",obj)
        .then(response =>{
            console.log(response.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render() {
        return (
            <>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image} />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        <Card.Text>
                            Price: {this.props.item.price}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.addToFav(this.props.item)}>Add To Favorite</Button>
                    </Card.Body>
                </Card>



            </>
        );
    }
}

export default withAuth0(FruitItem);