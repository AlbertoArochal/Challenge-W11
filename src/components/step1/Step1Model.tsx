import { useState } from 'react';
import FormData from 'form-data';
import { FormDataType } from '../../types/formDataType';

export const Step1Model = new FormData();
Step1Model.append('name', '');
Step1Model.append('lastName', '');
Step1Model.append('email', '');
Step1Model.append('birthDate', '');
Step1Model.append('gender', '');
Step1Model.append('newsletter', true);
