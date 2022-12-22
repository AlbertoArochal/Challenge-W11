import React from 'react';

interface FormHeaderProps {
    step: number;
}

export const StepHeader: React.FC<FormHeaderProps> = ({ step }) => {
    let stepTitle = '';
    let stepClass = '';
    switch (step) {
        case 1:
            stepTitle = 'Step 1';
            stepClass = 'dataStep1';
            break;
        case 2:
            stepTitle = 'Step 2';
            stepClass = 'dataStep2';
            break;
        default:
            stepTitle = 'Almost There...';
            break;
    }
    return (
        <div className={`stepHeader ${stepClass}`}>
            <h2 className="StepHeader">Step {step}</h2>
        </div>
    );
};
