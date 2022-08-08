import * as React from 'react';
import { TextField, Box, Container, Button, Checkbox } from '@mui/material';
import { Link } from "react-router-dom";

const TalentSignUp = (props) => {

    const initialFieldsData = {
        first_name : "",
        last_name : "",
        username : "",
        email : "",
        password : "",
    } 

    const [fieldData, setFieldData] = React.useState([initialFieldsData])

    let handleChange = (e) => {
        const { name, value } = e.target
        setFieldData({
            ...fieldData,
            [name]: value
        })
    }

    let handleTalentSignUp = async (e) => {
        e.preventDefault();
        const url = `http://wren.in:3200/api/sign-up/talent`;
        await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                first_name: fieldData.first_name,
                last_name: fieldData.last_name,
                username: fieldData.username,
                email: fieldData.email,
                password: fieldData.password,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((resData) => {
                alert("Success");
            });
            setFieldData(initialFieldsData);
    }


    return (
        <>
            <Container>
                    <Box>
                        <h4>
                            {props.formHeader}
                        </h4>
                        <form onSubmit={handleTalentSignUp} >
                            <TextField
                                id="size"
                                type="text"
                                name='first_name'
                                value={fieldData.first_name}
                                onChange={handleChange}
                                label="First Name"
                                variant="standard"
                                required
                                />
                            <br />
                            <TextField
                                id="size"
                                type="text"
                                name='last_name'
                                value={fieldData.last_name}
                                onChange={handleChange}
                                label="Last Name"
                                variant="standard"
                                required
                                />
                            <br />
                            <TextField
                                id="size"
                                type="text"
                                name='username'
                                value={fieldData.username}
                                onChange={handleChange}
                                label="Username"
                                variant="standard"
                                required
                                />
                            <br />
                            <TextField
                                id="size"
                                type="email"
                                name='email'
                                value={fieldData.email}
                                onChange={handleChange}
                                label="Email"
                                variant="standard"
                                required
                                />
                            <br />
                            <TextField
                                id="size"
                                type="password"
                                name='password'
                                value={fieldData.password}
                                onChange={handleChange}
                                label="Password"
                                variant="standard"
                                required
                            />
                            <br />
                            <div className='my-4' >
                            <Checkbox defaultChecked color="success"  />
                            I agree to the <Link to="/"> Terms and Conditions </Link>
                            </div>
                            <Button variant="contained" type='submit' > SIGN UP </Button>
                        </form>
                    </Box>
            </Container>
        </>
    )
}

export default TalentSignUp