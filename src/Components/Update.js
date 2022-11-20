import { Button, Checkbox, Form } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {

    let navigate = useNavigate();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, [])
    
    const updateAPIData = () => {
        axios.put(`https://6373df540bb6b698b6178f9c.mockapi.io/testData/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/read');
        })
    }

    return(
        <Form className='create-form'>
            
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
            
            <Button onClick={ updateAPIData } type='submit'>Update</Button>

        </Form>
    )
}

export default Update;