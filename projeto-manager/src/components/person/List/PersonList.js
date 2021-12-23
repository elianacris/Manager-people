import { Divider } from "@mui/material";
import React from "react";
import { Table, TableOne, TableTwo } from "./styled";
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import PersonForm from "../PersonForm/PersonForm";


const PersonList = () => {

    return (
        <Table>
            <TableOne>
                <tr>
                    <div>

                        <PersonIcon />

                    </div>
                    <div>
                        <WorkIcon />
                    </div>
                    <div>

                        <LocalPhoneIcon />

                    </div>
                    <div>
                        <EmailIcon />
                    </div>
                    <div>
                        <EventIcon />
                    </div>
                </tr>
                <Divider />
                <tr>

                    <td>Joana</td>
                    <Divider orientation="vertical" flexItem />

                    <td>Analista</td>
                    <Divider orientation="vertical" flexItem />

                    <td>(62)98786-8544</td>
                    <Divider orientation="vertical" flexItem />

                    <td>joana123@gmail.com</td>
                    <Divider orientation="vertical" flexItem />
                    
                    <td>20/12/1985</td>
                </tr>
                <Divider />

            </TableOne>
            <TableTwo>

                <PersonForm />

            </TableTwo>
        </Table>
    )
}
export default PersonList;