import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from '@mui/lab'
import { Body, Form, Main, TextSignUp } from "./styled";
import { goToList } from "../../../router/coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";


const PersonForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", phone: 0, service: "", birthDate: 0 })
    const [value, setValue] = useState(null);

    useEffect(() =>{
     
    },[])
    const registerPerson = () =>{
        
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        clear()

    }


    return (
        <Body>
            <TextSignUp>
                <p>Register Person</p>
            </TextSignUp>
            <Main>
                <Form onSubmit={onSubmitForm}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        onChange={onChange}
                        name={'name'}
                        value={form.name}

                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="E-mail"
                        type='email'
                        onChange={onChange}
                        name={'email'}
                        value={form.email}

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label=" Phone (xx) xxxxx-xxxx"
                        type='tel'
                        onChange={onChange}
                        name={'phone'}
                        value={form.phone}


                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Service"
                        onChange={onChange}
                        name={'service'}
                        value={form.service}


                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            required
                            label="Birth Date"
                            name={'birthDate'}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </LocalizationProvider>

                    <Button
                        onClick={() => goToList(history)}
                        color='secondary'
                        variant="outlined">
                        To Send
                    </Button>

                </Form>

            </Main>
        </Body>
    )
}
export default PersonForm;