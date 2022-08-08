import { LocationCity } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import { Card, Form, Row, Col, Button, Container, FormControl } from 'react-bootstrap'
import Footer from './Footer'

const Detail = () => {

    const cardData = [
        {
            id:1,
            text: "Chemist Ware house", 
            address:'Castle Hill , Nsw Au 2154',
            rating: "https://th.bing.com/th/id/R.a3e447532dd15429f2b5f13eaf3a059a?rik=YT0yGSz8VrK5GQ&riu=http%3a%2f%2fwww.persianrugcarpet.com%2fMain%2ffour_star_rating.gif&ehk=SKx%2bCIAuQiOmA3yryJ3o03K0Rp5FK8IwfvovRnaaNYo%3d&risl=&pid=ImgRaw&r=0",
            image:"https://www.omxtechnologies.com/wp-content/uploads/2020/01/How-to-Keep-Your-E-Commerce-System-Funtioning-at-Optimum-Capacity.png",
        }
        ,        {
            id:2,
            text: "Chemist Ware house",
            address:'Castle Hill , Nsw Au 2154',
            rating: "https://th.bing.com/th/id/R.a3e447532dd15429f2b5f13eaf3a059a?rik=YT0yGSz8VrK5GQ&riu=http%3a%2f%2fwww.persianrugcarpet.com%2fMain%2ffour_star_rating.gif&ehk=SKx%2bCIAuQiOmA3yryJ3o03K0Rp5FK8IwfvovRnaaNYo%3d&risl=&pid=ImgRaw&r=0",
            image:"https://www.omxtechnologies.com/wp-content/uploads/2020/01/How-to-Keep-Your-E-Commerce-System-Funtioning-at-Optimum-Capacity.png",
        },
        {
            id:3,
            text: "Chemist Ware house",
            address:'Castle Hill , Nsw Au 2154',
            rating: "https://th.bing.com/th/id/R.a3e447532dd15429f2b5f13eaf3a059a?rik=YT0yGSz8VrK5GQ&riu=http%3a%2f%2fwww.persianrugcarpet.com%2fMain%2ffour_star_rating.gif&ehk=SKx%2bCIAuQiOmA3yryJ3o03K0Rp5FK8IwfvovRnaaNYo%3d&risl=&pid=ImgRaw&r=0",
            image:"https://www.omxtechnologies.com/wp-content/uploads/2020/01/How-to-Keep-Your-E-Commerce-System-Funtioning-at-Optimum-Capacity.png",
        },        {
            id:4 ,
            text: "Chemist Ware house",
            address:'Castle Hill , Nsw Au 2154',
            rating: "https://th.bing.com/th/id/R.a3e447532dd15429f2b5f13eaf3a059a?rik=YT0yGSz8VrK5GQ&riu=http%3a%2f%2fwww.persianrugcarpet.com%2fMain%2ffour_star_rating.gif&ehk=SKx%2bCIAuQiOmA3yryJ3o03K0Rp5FK8IwfvovRnaaNYo%3d&risl=&pid=ImgRaw&r=0",
            image:"https://www.omxtechnologies.com/wp-content/uploads/2020/01/How-to-Keep-Your-E-Commerce-System-Funtioning-at-Optimum-Capacity.png",
        }



    ]

    return (
        <>
            <Card style={{ textAlign: "center" }} className="bg-dark text-white">
                <Card.Img src="https://www.omxtechnologies.com/wp-content/uploads/2020/01/How-to-Keep-Your-E-Commerce-System-Funtioning-at-Optimum-Capacity.png" height="400px" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text  >
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Container style={{ justifyContent: 'space-between', textAlign:"center"  }} fluid>
                <Grid className="my-3" >
                    <Row>
                    <Col >
                        </Col>
                        <Col >
                            <Button varient="light" > All  </Button>
                        </Col>

                        <Col>
                            <Button varient="light" > Fruit's </Button>
                        </Col>
                        <Col>
                            <Button variant="light" > Vegetable's </Button>

                        </Col>
                        <Col >
                        </Col>
                    </Row>
                </Grid>
            </Container>


<Grid style={{display: "flex", justifyContent:"space-between" }} > 
 {
    cardData.map((item, indx)=> (
        <Card key={indx} style={{ width: '18rem',textAlign: "center" }} >
        <Card.Img variant="top" src={item.image} alt="no image"  />
        <Card.Body>
          <Card.Title style={{}}>{item.text}</Card.Title>
          <Card.Text>
          {item.address}
          </Card.Text>
          <Card.Text>
          {item.rating}
          </Card.Text>
          <Button variant="primary"> View All </Button>
        </Card.Body>
      </Card>
  
    ) )
 }
     </Grid>

<Footer />
        </>
    )
}

export default Detail