import React, { useState } from 'react';
import { Step1 } from './step1/Step1';
import { FormProps } from '../types/props';
import { Step1Model } from './step1/Step1Model';
import { Step2 } from './step2/Step2';
import { Step3 } from './step3/Step3';
export const Form: React.FC<FormProps> = ({ initialStep, onSubmit }) => {
    // Estado para almacenar el paso actual y los datos del formulario
    const [step, setStep] = useState(initialStep);
    const [formData, setFormData] = useState({ Step1Model });

    // Función para cambiar al paso siguiente
    const goToNextStep = () => {
        setStep(step + 1);
    };

    // Función para actualizar los datos del formulario
    const updateFormData = (data: FormData) => {
        setFormData({ ...formData, ...data });
    };

    return (
        <div>
            {step === 1 && (
                <Step1
                    onChangeStep={goToNextStep}
                    onUpdateFormData={updateFormData}
                />
            )}

            {step === 2 && (
                <Step2
                    onChangeStep={goToNextStep}
                    onUpdateFormData={updateFormData}
                />
            )}
            {step === 3 && (
                <Step3
                    onChangeStep={goToNextStep}
                    onUpdateFormData={updateFormData}
                />
            )}
        </div>
    );
};
