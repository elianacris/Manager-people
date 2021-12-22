import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from '@mui/lab'
import { Body, Form, Main, TextSignUp } from "./styled";
import { goBack, goToList } from "../../router/coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";


const FormPage = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const [value, setValue] = useState(null);
    const onSubmitForm = (event) => {
        event.preventDefault()

    }

    return (
        <Body>
            <TextSignUp>
                <h1>Sing Up</h1>

            </TextSignUp>
            <Main>
                <Form onSubmit={onSubmitForm}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        onChange={onChange}

                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="E-mail"
                        type='email'
                        onChange={onChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label=" Phone (xx) xxxxx-xxxx"
                        type='tel'
                        onChange={onChange}

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Kind of Service"
                        onChange={onChange}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            required
                            label="Birth Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            type='password'
                            value={form.password}
                            name={'password'}
                            onChange={onChange}
                            onClick={() => goBack(history)}

                        />
                    </LocalizationProvider>

                    <Button
                        onClick={() => goToList(history)}
                        color='secondary'
                        variant="outlined">
                        Sing Up
                    </Button>
                    <Button
                        onClick={() => goBack(history)}
                        color='secondary'
                        variant="outlined">
                        Back
                    </Button>
                </Form>

            </Main>
        </Body>
    )
}
export default FormPage;