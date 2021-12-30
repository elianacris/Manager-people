import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from '@mui/lab'
import { Body, Form, Main, TextSignUp } from "./styled";
import useForm from "../../../hooks/useForm";
import DateAdapter from '@mui/lab/AdapterDateFns';

const initPerson = {
    id: '',
    name: '',
    email: '',
    phone: '',
    profession: '',
    birthDate: null
}

const PersonForm = (props) => {

    const { person } = props;
    const [form, setForm, onChange, clear] = useForm(person)
    // const [value, setValue] = useState(new Date());

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
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <DatePicker
                            mask="__/__/____"
                            id="outlined-required"
                            name='birthDate'
                            type="date"
                            disableFuture
                            label="Birth date"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={form.birthDate}
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                            onChange={(newValue) => {
                                setForm({ ...form, birthDate: newValue })
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </LocalizationProvider>

                    <Button
                        type="submit"
                        color='secondary'
                        variant="outlined"
                        onClick={() => form.id ? props.update(form) : props.create(form)}
                    >
                        {form.id ? 'Update' : 'Save'}
                    </Button>
                    <Button type="button" variant="outlined"
                        onClick={() => setForm(initPerson)}
                    >CLEAR</Button>
                </Form>
            </Main>
        </Body>
    )
}
export default PersonForm;