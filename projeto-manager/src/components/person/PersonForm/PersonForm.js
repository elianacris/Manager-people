import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from '@mui/lab'
import { Body, Form, Main, TextSignUp } from "./styled";
import useForm from "../../../hooks/useForm";


const PersonForm = (props) => {

    const { person } = props;
    const [form, setForm, onChange, clear] = useForm(person)
    const [value, setValue] = useState(null);

    useEffect(() => {
        setForm(person);
    }, [person]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        clear()
    }

    return (
        <Body>
            <TextSignUp>
                <p>{form.id ? 'Update Person' : 'Register Person'}</p>
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
                        label="Profession"
                        onChange={onChange}
                        name={'profession'}
                        value={form.profession}


                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            required
                            label="Birth Date"
                            name={'birthDate'}
                            value={form.birthDate}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </LocalizationProvider>

                    <Button
                        type="onSubmit"
                        color='secondary'
                        variant="outlined"
                        onClick={() => props.update(form)}
                    >
                        {form.id ? 'Update' : 'Save'}
                    </Button>
                    <Button type="button" variant="outlined"
                        onClick={() => setForm("")}
                    >CLEAR</Button>
                </Form>
            </Main>
        </Body>
    )
}
export default PersonForm;