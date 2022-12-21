export const toLS = (formData: any, step: number) => {
    localStorage.setItem(`formData-${step}`, JSON.stringify(formData));
};
