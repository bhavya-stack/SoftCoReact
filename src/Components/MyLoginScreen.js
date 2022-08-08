import * as React from 'react';
import { TextField, Box, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyLoginScreen = () => {

    const initialFieldsData = {
        email: "",
        password: "",
    }

    const navigation = useNavigate()
    const [fieldData, setFieldData] = React.useState([initialFieldsData])

    let handleChange = (e) => {
        const { name, value } = e.target
        setFieldData({
            ...fieldData,
            [name]: value
        })
    }

    let handleFanSignUp = async (e) => {
        e.preventDefault();
        if (fieldData.email === "test@test.com" && fieldData.password === "Test@123") {
            alert("Success");
            navigation(`/dashboard`);
            setFieldData(initialFieldsData);
        } else {
            alert("User Not Valid")
        }
    }

    return (
        <>
            <Container>
                <Box style={{textAlign:'center', marginTop:'150px' }}>
                    <h4>
                        User Login
                    </h4>
                    <Box className='my-3'>
                        <form onSubmit={handleFanSignUp} >
                            <TextField
                            style={{width:'300px' }}
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
                            style={{width:'300px' }}
                                type="password"
                                name='password'
                                value={fieldData.password}
                                onChange={handleChange}
                                label="Password"
                                variant="standard"
                                required
                            />
                            <br />
                            <Button className='my-4' variant="contained" type='submit' > SIGN UP </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default MyLoginScreen



