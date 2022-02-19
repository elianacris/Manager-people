import { Button, TextField } from "@mui/material";
import React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from '@mui/lab'
import { Body, Form, Main, TextSignUp } from "./styled";
import DateAdapter from '@mui/lab/AdapterDateFns';
import InputRHF from "../../RHF/InputRHF";
import validationForm from "../../../util/validationForm";
import { useForm } from "react-hook-form";


const PersonForm = (props) => {
    const form = useForm(validationForm);
    const { control, handleSubmit, reset } = form;
    // const { person } = props;
    // const [value, setValue] = useState(new Date());

    // useEffect(() => {
    //     form(person);
    // }, [person]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        reset()
    }

    return (
        <Body>
            <TextSignUp>
                <p>{form.id ? 'Update Person' : 'Register Person'}</p>
            </TextSignUp>
            <Main>
                <Form onSubmit={handleSubmit(onSubmitForm)}>
                    <InputRHF
                        label="Name"
                        name='name'
                        control={control}
                    />

                    <InputRHF
                        label="E-mail"
                        name='email'
                        control={control}
                    />

                    <InputRHF
                        label="Phone (xx) xxxxx-xxxx"
                        type='tel'
                        name='phone'
                        control={control}
                    />

                    <TextField
                        label="Profession"
                        name='profession'
                        control={control}
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
                          
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                            onChange={(newValue) => {
                                // setForm({ ...form, birthDate: newValue })
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
                    onClick={reset}
                    >CLEAR</Button>
                </Form>
            </Main>
        </Body>
    )
}
export default PersonForm;