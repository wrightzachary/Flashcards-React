import { useState } from "react";

const useForm = (callback) => {
    const [flashcards, setFlashcards] = useState({});

    const handleChange = (event) => {
        event.persist();

        setFlashcards(flashcard => ({...flashcard, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return { flashcards, handleChange, handleSubmit }
};
 
export default useForm;