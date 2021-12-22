import { Button, TextField } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goBack } from "../../router/coordinator";
import { Body, Form } from "./styled";



const LoginPage = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        clear()
    }


    return (
        <Body>
            <div>
                <h1>Login</h1>
            </div>
            <Form onSubmit={onSubmitForm}>
                <TextField
                    required
                    id="outlined-required"
                    label="E-mail"
                    type='email'
                    value={form.email}
                    name={'email'}
                    onChange={onChange}
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
                <Button color='secondary' variant="outlined">Enter</Button>
                <Button
                onClick={() => goBack(history)}
                    color='secondary'
                    variant="outlined">
                    Back
                </Button>

            </Form>

        </Body>
    )
}
export default LoginPage;