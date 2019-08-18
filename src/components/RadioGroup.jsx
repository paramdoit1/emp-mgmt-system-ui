import styled from 'styled-components';
import React from 'react';

const RadioStyle = styled.div `
    font-size: 1rem;
    font-family: sans-serif;
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
`;

const LabelStyle = styled.label `
    font-family: BentonSans;
    font-size: 1rem;
    color: grey;
    flex-basis: 10%;
`;

const OptionLabelStyle = styled.label `
    font-family: BentonSans;
    font-size: 1rem;
    color: grey;
    display: flex;
    flex-basis: 70%;
    padding: 0.75rem;
`;

const FieldWrapper = styled.div `
    padding-right: 3rem;
    padding-bottom: 1rem;
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
`;

const RadioWrapper = styled.div `
    padding-right: 3rem;
    padding-bottom: 0.5rem;
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
`;

const InputStyle = styled.input.attrs({
    type: 'radio',
}) 
`
    transform: scale (2);
    padding: 2rem;
    margin-left: 0.75rem;
    margin-bottom: 0.5rem
`;


const RadioGroup = ({label, id, name, onChange, selected, options= [], ...rest}) => 
(
    <FieldWrapper>
        <LabelStyle> 
            {label}
        </LabelStyle>

        <RadioStyle id = {id} selected = {selected} onChange= {onChange} {...rest}>
        {
            options.map(
                (option) => (
                    <RadioWrapper>
                        <InputStyle name = {name} id = {option.value}
                            value = {option.value}
                            onChange= {onChange}>
                        </InputStyle>
                        <OptionLabelStyle htmlFor = {option.value}>
                            {option.label}
                        </OptionLabelStyle>

                    </RadioWrapper>
                )

            )
        }

        </RadioStyle>

    </FieldWrapper>
);

export default RadioGroup;