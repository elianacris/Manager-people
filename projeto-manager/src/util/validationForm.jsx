import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const mode = 'all';

const defaultValues = {
    name: '',
    email: '',
    phone: 0,
    profession: '',
    birthDate: ''
};

const validationForm = {
    mode,
    defaultValues,
    resolver: yupResolver(
        yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required('Campo é obrigatório'),
            phone: yup.number()
                .typeError('Campo é obrigatório')
                .required('Campo é obrigatório')
                .positive(),
            profession: yup.string().required('Campo é obrigatório'),
            birthDate: yup.string().required('Campo é obrigatório'),
        }).required()
    )
};

export default validationForm;