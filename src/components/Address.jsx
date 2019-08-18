import React from 'react';
import styled from 'styled-components';
import Input from './Input';

import { Row } from '../CustomerForm';

const AddressWrapper = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    margin-bottom: 3rem;
    font-size: 16px;
    font-family: sans-serif;
    color: grey;
`;

const GroupFields = styled.div`
    border: 2px solid grey;
    padding-left: 2rem;
    padding-top: 1rem;
`;

const Address = ({ label, onChange, values }) => {
    return (
        <AddressWrapper>
            <legend>
                {label}
            </legend>
            <GroupFields>
                <Row>
                    <Input label='Flat Number' id='flatNumber' value={values.flatNumber}
                        onChange={onChange} />
                    <Input label='House Number' id='houseNumber' value={values.houseNumber}
                        onChange={onChange} />
                </Row>
                <Row>
                    <Input label='Street Name' id='street' value={values.street}
                        onChange={onChange} />
                    <Input label='City' id='city' value={values.city}
                        onChange={onChange} />
                </Row>
                <Row>
                    <Input label='state' id='state' value={values.state}
                        onChange={onChange} />
                    <Input label='Post Code' id='postCode' value={values.postCode}
                        onChange={onChange} />
                </Row>
            </GroupFields>

        </AddressWrapper>

    )
}

export default Address;