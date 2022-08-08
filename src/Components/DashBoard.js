import React, { useEffect, useState } from 'react'
import { Nav, Container, Navbar, Form, FormControl, Card, Row } from "react-bootstrap";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useDispatch } from 'react-redux'

const DashBoard = () => {

    const [news, setNews] = useState([])

    const dispatch = useDispatch()
    const { newsResponce } = bindActionCreators(actionCreators, dispatch)

    let handleNews = (callBy) => {
        var searchVal = document.getElementById("searchVal").value;
        let totalPost = document.getElementsByClassName("data-post").length;
        if (callBy.toUpperCase() === "SEARCH") {
            totalPost = 0;
            setNews([]);
        }
        const url = `https://jsonplaceholder.typicode.com/posts?q=${searchVal}&_start=${totalPost}&_end=${totalPost + 10
            }`;
        fetch(url)
            .then((response) => response.json())
            .then((rec) => {
                setNews((old) => [...old, ...rec]);
// Set Responce in redux .
                newsResponce((old) => [...old, ...rec])
            });
    }

    useEffect(() => {
        handleNews("callBy");
        
        window.addEventListener("scroll", (event) => {
            const winScroll =
                document.body.scrollTop || document.documentElement.scrollTop;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = winScroll / height;
            console.log(scrolled);
            const windowHeight = window.pageYOffset;
            if (scrolled == 1) {
                debugger;
                handleNews("scroll");
            }
        });
    }, [])

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"> <h3> Times of India News </h3> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                id="searchVal"
                                placeholder="Search"
                                className="me-5"
                                aria-label="Search"
                                onChange={() => handleNews("search")}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                news.map((item) => (
                    <>
                        <Row className="data-post">
                            <Card>
                                <Card.Header><h5>Title :</h5> :-  {item.title} </Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        Description :
                                        <p>
                                            :-
                                            {' '}
                                            {/* {item.description} */}
                                            {item.body}
                                            {' '}
                                        </p>
                                        <footer className="blockquote-footer">
                                            Author : <cite title="Source Title">
                                                {/* {item.author} */}
                                            </cite>
                                        </footer>
                                        <footer className="blockquote-footer">
                                            Published At : <cite title="Source Title">
                                                {/* {item.publishedAt} */}
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Row>
                    </>
                ))
            }
        </>
    )
}

export default DashBoard