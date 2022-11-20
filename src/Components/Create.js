import { Button, Checkbox, Form } from 'semantic-ui-react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    
    let navigate = useNavigate();

    // const postData = () => {
    //     console.log(firstName);
    //     console.log(lastName);
    //     console.log(checkbox);
    // }
    

    const postData = () => {
        axios.post(`https://6373df540bb6b698b6178f9c.mockapi.io/testData`, {
            firstName,
            lastName,
            checkbox
        })
        .then(() => {
            navigate('/read');
        })
    }
    

    return (
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
            
            <Button onClick={ postData } type='submit'>Submit</Button>

        </Form>
    )
} 

export default Create;