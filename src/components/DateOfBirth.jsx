import React from 'react';
import styled from 'styled-components';

import Select from './Select';
import {Row} from '../CustomerForm';


const FieldsetStyle = styled.div   `
    flex-basis: 100%;
    color: grey;
`;

const Legend = styled.legend `
    font-size: 1rem;
    font-family: san-serif;

`;

const OtherOptions = (start, stop, inc) => {
    const optionsArray = [];
    for(let i = start; i <=stop; i++) {
        const option = {
            label: i,
            value: i
        };
        optionsArray.push(option);
    };
    if(inc === -1) optionsArray.reverse();
    return optionsArray;
};

const DateOfBirth = ({label, onChange, dd, mm, yyyy}) => {
    return (
        <Row>
            <FieldsetStyle>
                <Legend>
                    {label}
                </Legend>
                <Row>
                    <Select name = 'dd' selected = {dd} options = { [
                        {label: 'DD', value: ''}, ...OtherOptions(1, 31, 1)
                    ]} onChange = {onChange} />

                    <Select name = 'mm' selected = {mm} options = { [
                        {label: 'MM', value: ''}, ...OtherOptions(1, 12, 1)
                    ]} onChange = {onChange} />

                    <Select name = 'yyyy' selected = {yyyy} options = { [
                        {label: 'YYYY', value: ''}, ...OtherOptions(1920, 2019, -1)
                    ]} onChange = {onChange} />

                </Row>
            </FieldsetStyle>

        </Row>
    );
}

export default DateOfBirth;