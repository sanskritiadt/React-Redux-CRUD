import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/action';
function AddUser() {
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""

    })
    const [error,setError] = useState('');
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { name, email, contact, address } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !address || !contact){
            setError("Please fill all the input fields.")
        }else{
            dispatch(addUser(state));
            navigate("/");
            setError("");       }

    }
    return (
        <div>
            <Button style={{ marginTop: '40px', width: "100px" }} variant="contained" color="primary" onClick={() => navigate("/")}>Go Back</Button>
            <h2 align="center">Add User</h2>
            {error && <h3 style={{color:'red',textAlign:"center"}}>{error}</h3>}
            <Box
                align="center"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="standard-basic"
                    label="Name"
                    name='name'
                    variant="standard"
                    value={name}
                    type='text'
                    onChange={handleInputChange} />
                <br />
                <TextField
                    id="standard-basic"
                    label="Email"
                    name='email'
                    variant="standard"
                    value={email}
                    type='email'
                    onChange={handleInputChange} />
                <br />
                <TextField
                    id="standard-basic"
                    label="Contact"
                    name='contact'
                    variant="standard"
                    value={contact}
                    type='number'
                    onChange={handleInputChange} />
                <br />
                <TextField
                    id="standard-basic"
                    label="Address"
                    name='address'
                    variant="standard"
                    value={address}
                    type='text'
                    onChange={handleInputChange} />
                <br />
                <Button
                    style={{ marginBottom: '10px', width: "100px" }}
                    variant="contained" color="primary"
                    type='submit'>Submit</Button>
            </Box>
        </div>
    )
}

export default AddUser
