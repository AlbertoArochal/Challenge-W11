import { Step1Props } from '../../types/props';
import { Step1Model } from './Step1Model';
import { FormDataType } from '../../types/formDataType';
import { useState } from 'react';
import { toLS } from '../../helpers/toLS';

export const Step1: React.FC<Step1Props> = ({
    onChangeStep,
    onUpdateFormData,
}) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        newsletter: false,
    });

    const handleNextStep = () => {
        onChangeStep(1);
    };

    return (
        <>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                }
            />
            <br />
            <label htmlFor="last-name">Last name:</label>
            <input
                type="text"
                id="last-name"
                value={formData.lastName}
                onChange={(event) =>
                    setFormData({ ...formData, lastName: event.target.value })
                }
            />
            <br />
            <label htmlFor="birth-date">Birth date:</label>
            <input
                type="date"
                id="birth-date"
                value={formData.birthDate}
                onChange={(event) =>
                    setFormData({ ...formData, birthDate: event.target.value })
                }
            />
            <br />
            <label htmlFor="gender">Gender:</label>
            <select
                id="gender"
                value={formData.gender}
                onChange={(event) =>
                    setFormData({ ...formData, gender: event.target.value })
                }
            >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="preferNotToMention">
                    Prefer not to mention
                </option>
            </select>
            <br />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                }
            />
            <br />
            <label htmlFor="newsletter">
                <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(event) =>
                        setFormData({ ...formData, email: event.target.value })
                    }
                />
                <br />
                Desea recibir información de nuestra newsletter?
            </label>
            <button
                onClick={() => {
                    handleNextStep();
                    toLS(formData, 1);
                }}
            >
                Next
            </button>
        </>
    );
};
