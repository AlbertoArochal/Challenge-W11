import React, { useEffect, useState } from 'react';
import { FormData } from '../../types/props';
import { Step3Props } from '../../types/props';

export const Step3: React.FC<any> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({});

    useEffect(() => {
        const formDataString1 = localStorage.getItem('formData-1');
        const formDataString2 = localStorage.getItem('formData-2');
        if (formDataString1 && formDataString2) {
            setFormData({
                ...JSON.parse(formDataString1),
                ...JSON.parse(formDataString2),
            });
        }
    }, []);

    return (
        <>
            <h1>Confirm your information</h1>
            {Object.keys(formData).map((key) => (
                <p key={key}>
                    {key}: {formData[key]}
                </p>
            ))}
            <button onClick={onSubmit}>Confirm</button>
        </>
    );
};
