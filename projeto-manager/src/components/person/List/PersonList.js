import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from "react";
import { Table, TableOne, TableTwo } from "./styled";
import PersonForm from "../PersonForm/PersonForm";
import { useEffect } from 'react';

const columns = [
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'profession', headerName: 'Profession', width: 120 },
    { field: 'phone', headerName: 'Phone', width: 110 },
    { field: 'email', headerName: 'Email', type: 'number', width: 180 },
    { field: 'birthDate', headerName: 'Birth Date', type: 'date', width: 135 }
];

const initPerson = {
    id: '',
    name: '',
    email: '',
    phone: '',
    profession: '',
    birthDate: ''
}

const PersonList = () => {

    const [people, setPeople] = useState([]);
    const [personSelect, setPersonSelect] = useState(initPerson);

    useEffect(() => {
        if (localStorage.getItem("people")) {
            const peopleList = localStorage.getItem("people");
            const peopleArray = JSON.parse(peopleList);
            setPeople(peopleArray);
        }
    }, []);

    useEffect(() => {
        const list = people;
        localStorage.setItem("people", JSON.stringify(list));

    }, [people]);


    const onSelectedPerson = (id) => {
        // eslint-disable-next-line eqeqeq
        setPersonSelect(people.find(f => f.id == id));
    }

    const createPerson = (person) => {
        const newPeople = [...people, { ...person, id: Date.now() }];
        setPeople(newPeople)
    }

    const updatePerson = (person) => {

        const index = people.findIndex(el => el.id == person.id);
        const list = [...people];



        setPeople([...list[index] = {
            name: person.name,
            email: person.email,
            phone: person.phone,
            profession: person.profession,
            birthDate: person.birthDate
        }]);
    }


    return (
        <Table>

            <TableOne>
                <div style={{ height: 550, width: 'auto' }}>
                    <DataGrid
                        
                        columns={columns}
                        rows={people}
                        checkboxSelection={false}
                        onSelectionModelChange={(id) => onSelectedPerson(id)}
                    />
                </div>
            </TableOne>

            <TableTwo>
                <PersonForm
                    person={personSelect}
                    create={(value) => createPerson(value)}
                    update={(value) => updatePerson(value)}
                />
            </TableTwo>
        </Table>
    );

}
export default PersonList;