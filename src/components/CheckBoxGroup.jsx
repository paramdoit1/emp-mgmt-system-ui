import styled from 'styled-components';
import React from 'react';

const CheckBoxLabelStyle = styled.label `
    font-family: BentonSans
    font-size: 1rem;
    color: grey;
    display: flex;
    flex-basisL 70%
`;

const FieldWrapper = styled.div `
    padding-right: 3rem;
    padding-bottom: 1rem;
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
`;
const InputStyle = styled.input `
    transform: scale(2);
    padding: 14px;
    margin: 0.5rem;
`;


const CheckBox = ({label, id, name, value, onChange, selected, options = [], ...rest}) => 
(
    <FieldWrapper>
        <InputStyle type = 'checkbox' id = {id} name = {name||id}
             value = {value}
             onChange = {onChange} selected = {selected} {...rest}/>

        <CheckBoxLabelStyle htmlFor = {id}>
            {label}
        </CheckBoxLabelStyle>

    </FieldWrapper>
);

export default CheckBox;