export type Step1Props = {
    onChangeStep: (step: number) => void;
    onUpdateFormData: (formData: FormData) => void;
};

export interface FormProps {
    initialStep: number;
    onSubmit: (formData: any, step: number) => void;
}

export interface FormData {
    [key: string]: any;
}

export interface Step3Props {
    onSubmit: (formData: FormData, step: number) => void;
}
