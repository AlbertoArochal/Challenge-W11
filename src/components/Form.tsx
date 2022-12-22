import React, { useState } from 'react';
import { Step1 } from './step1/Step1';
import { FormProps } from '../types/props';
import { Step1Model } from './step1/Step1Model';
import { Step2 } from './step2/Step2';
import { Step3 } from './step3/Step3';
import { Header } from '../components/Header/Header';
import { StepHeader } from '../components/Header/StepHeader';
import { Step4 } from './step4/Step4';
export const Form: React.FC<FormProps> = ({ initialStep, onSubmit }) => {
    const [step, setStep] = useState(initialStep);
    const [formData, setFormData] = useState<any>({ Step1Model });

    const goToNextStep = () => {
        setStep(step + 1);
    };

    const goBackStep = () => {
        setStep(step - 1);
    };

    const updateFormData = (data: any) => {
        setFormData({ ...formData, ...data });
    };

    const goToStep4 = () => {
        setStep(4);
    };

    return (
        <>
            <Header title="th3h.Formu1ary" />
            <div className="FormContainer">
                <StepHeader step={step} />
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
                        goBackStep={goBackStep}
                    />
                )}
                {step === 3 && (
                    <Step3
                        onSubmit={() => {
                            onSubmit(formData, step);
                            goToStep4();
                        }}
                        goBackStep={goBackStep}
                    />
                )}
                {step === 4 && <Step4 formData={formData} />}
            </div>
        </>
    );
};
