export type Step1Props = {
    onChangeStep: (step: number) => void;
    onUpdateFormData: (formData: FormData) => void;
};

export type FormProps = {
    initialStep: number;
    onSubmit: (formData: FormData) => void;
};
