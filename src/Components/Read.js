import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Read() {
    
    const [APIData, setAPIData] = useState([]);

    const getData = () => {
        axios.get(`https://6373df540bb6b698b6178f9c.mockapi.io/testData`).then((getData) => {
            setAPIData(getData.data);
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://6373df540bb6b698b6178f9c.mockapi.io/testData/${id}`).then(() => {
            getData();
        })
    }

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    }
    
    useEffect(() => {
        axios.get(`https://6373df540bb6b698b6178f9c.mockapi.io/testData`).then((response) => {setAPIData(response.data)})
    },[])

    return(
        <div>
            <Table singleLine>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{ data.firstName }</Table.Cell>
                                <Table.Cell>{ data.lastName }</Table.Cell>
                                <Table.Cell>{ data.checkbox ? 'Checked' : 'Unchecked' }</Table.Cell>
                                <Link to='/Update'>
                                    <Table.Cell>
                                        <Button primary onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button color='red' onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>

            </Table>
        </div>
    )

}

export default Read; 