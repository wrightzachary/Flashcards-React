<<<<<<< HEAD
import { useState } from 'react';


const useForm = (callback) => {
    const [values, setValue] = useState({});

    const handleChange = (event) => {
        event.persist();
        setValue({...values, [event.target.name]: event.target.value});
    }
=======
import { useState } from "react";

const useForm = (callback) => {
    const [flashcards, setFlashcards] = useState({});

    const handleChange = (event) => {
        event.persist();

        setFlashcards(flashcard => ({...flashcard, [event.target.name]: event.target.value }));
    };
>>>>>>> f951c47e60054fab860d372889bb4e7d15390049

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    };
<<<<<<< HEAD
    return { values, handleChange, handleSubmit }
};

=======

    return { flashcards, handleChange, handleSubmit }
};
 
>>>>>>> f951c47e60054fab860d372889bb4e7d15390049
export default useForm;