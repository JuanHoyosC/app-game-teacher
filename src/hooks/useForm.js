import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [form, setForm] = useState(initialState);
    const [fileA, setFile] = useState({});

    const handleInputChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value })
    }

    const handleReset = (e) => {
        e.preventDefault();
        setForm(initialState);
    }

    const handleFile = ({ target }) => {
        setFile(target.files[0]);
    }

    return { form, handleInputChange, handleFile, fileA, handleReset };
}
