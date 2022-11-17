import React from 'react';
import { Table } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Read() {
    
    const [APIData, setAPIData] = useState([]);
    
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
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{ data.firstName }</Table.Cell>
                                <Table.Cell>{ data.lastName }</Table.Cell>
                                <Table.Cell>{ data.checkbox ? 'Checked' : 'Unchecked' }</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>

            </Table>
        </div>
    )

}

export default Read; 