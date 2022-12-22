import React from 'react';
import { useState } from 'react';
import { toLS } from '../../helpers/toLS';

interface Step2Props {
    onChangeStep: () => void;
    onUpdateFormData: (data: FormData) => void;
    goBackStep: () => void;
}

export const Step2: React.FC<Step2Props> = ({
    onChangeStep,
    onUpdateFormData,
    goBackStep,
}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword: '',
        accountType: '',
    });

    const handleNextStep = () => {
        onChangeStep();
    };

    return (
        <>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(event) =>
                    setFormData({ ...formData, username: event.target.value })
                }
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(event) =>
                    setFormData({ ...formData, password: event.target.value })
                }
            />
            <br />
            <label htmlFor="repeat-password">Repeat password:</label>
            <input
                type="password"
                id="repeat-password"
                value={formData.repeatPassword}
                onChange={(event) =>
                    setFormData({
                        ...formData,
                        repeatPassword: event.target.value,
                    })
                }
            />
            <br />
            <label htmlFor="account-type">Account type:</label>
            <select
                id="account-type"
                value={formData.accountType}
                onChange={(event) =>
                    setFormData({
                        ...formData,
                        accountType: event.target.value,
                    })
                }
            >
                <option value="personal">Personal</option>
                <option value="pro">Pro</option>
                <option value="business">Business</option>
            </select>
            <button
                onClick={() => {
                    handleNextStep();
                    toLS(formData, 2);
                }}
            >
                Next
            </button>
            <button onClick={goBackStep}>Turn Back</button>
        </>
    );
};
