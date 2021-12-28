import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from "react";
import { Table, TableOne, TableTwo } from "./styled";
import PersonForm from "../PersonForm/PersonForm";
/* import { Divider, IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'; */

const columns = [
    { field: 'name', headerName: 'Name', width: 70 },
    { field: 'profession', headerName: 'Profession', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'email', headerName: 'Email', type: 'number', width: 90 },
    { field: 'birthDate', headerName: 'Birth Date', type: 'date', width: 90 }
];

const initPeople = [
    {
        id: 1,
        name: 'Joana',
        profession: 'Veterinária',
        phone: '62984098147',
        email: 'joana@gmail.com',
        birthDate: '01/01/1993'
    },
    {
        id: 2,
        name: 'Pedro',
        profession: 'Advogado',
        phone: '6298546833',
        email: 'pedro@gmail.com',
        birthDate: '01/01/1993'
    },
    {
        id: 3,
        name: 'Haryel',
        profession: 'Analista',
        phone: '6291234567',
        email: 'haryel@gmail.com',
        birthDate: '01/01/1993'
    }
]

const initPerson = {
    id: '',
    name: '',
    email: '',
    phone: '',
    profession: '',
    birthDate: ''
}


const PersonList = () => {

    const [people, setPeople] = useState(initPeople);
    const [personSelect, setPersonSelect] = useState(initPerson);

    const onSelectedPerson = (id) => {
        setPersonSelect(people.find(f => f.id == id));
    }

    return (
        <Table>

            <TableOne>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={initPeople}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection={false}
                        onSelectionModelChange={(id) => onSelectedPerson(id)}
                    />
                </div>
            </TableOne>

            <TableTwo>
                <PersonForm person={personSelect} />
            </TableTwo>
        </Table>
    );

}
export default PersonList;