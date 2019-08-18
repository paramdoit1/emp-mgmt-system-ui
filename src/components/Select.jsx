import styled from 'styled-components';
import React from 'react';

const SelectStyle = styled.select `
    font-size: 1rem;
    font-family: sans-serif;
    border-radius: 3px;
    border: 2px solid grey;
    height: 3rem;
    width: 100%;
`;

const LabelSyle = styled.label `
    font-family: BentonSans;
    font-size: 1rem;
    color: grey;
    flex-basis: 10%;
`;

const FieldWrapper = styled.div `
    padding-right: 3rem;
    padding-bottom: 1rem;
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
`;

const Select = ({label, id, name, selected, options=[], ...rest}) =>
(
    <FieldWrapper>
        <LabelSyle>
            {label}
        </LabelSyle>

        <SelectStyle name = {name} id= {id || name} selected = {selected} {...rest}> 
        {
            options.map(
                (option) => 
                    <option key = {option.value} value = {option.value} selected = {option.selected}>{option.label} </option>

            )
        }

        </SelectStyle>
    </FieldWrapper>
);

export default Select;