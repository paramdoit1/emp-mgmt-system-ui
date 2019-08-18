import styled from 'styled-components';
import React from 'react';
//import PropTypes from 'prop-types';


const InputStyle = styled.input`
    font-size: 2 rem;
    font-family: sans-serif
    border-radius: 3px;
    border: 2px solid grey;
    height: 3rem;
    width: 100%;
`;

const LabelStyle = styled.label`
    font-family: BentonSans;
    font-size: 1rem;
    color: grey;
    flex-basis: 10%;
`;

const FieldWrapper = styled.div`
    padding-right: 3rem;
    padding-bottom: 1rem;
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
`;

const Input = ({ label, id, name, value, ...rest }) => 
    (
        <FieldWrapper>
            <LabelStyle for={id} > {label} </LabelStyle>

            <InputStyle type="text" name={name || id}
                id={id}
                value={value}
                {...rest} />

        </FieldWrapper>

    );

    Input.defaultProps = {
        value: ' ',
        name: ''
    }

   
    export default Input;
