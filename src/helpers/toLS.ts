import { FormProps } from '../types/props';
export const toLS: FormProps['onSubmit'] = (formData: any, step: number) => {
    localStorage.setItem(`formData-${step}`, JSON.stringify(formData));
};
