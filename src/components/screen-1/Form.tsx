import * as React from 'react';
import { NameField } from './NameField';
import { GenderField } from './GenderField';
import { EmailField } from './EmailField';
import { NewsletterCheckbox } from './NewsLetter';

export const Form = (props) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

    return <form onSubmit={handleSubmit}>
        <NameField />
        <GenderField />
        <EmailField />
        <NewsletterCheckbox />
        <button type="submit">Enviar</button>
    </form>;
};
