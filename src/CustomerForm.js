import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

import FormContainer from './components/FormContainer';
import Input from './components/Input';
import DateOfBirth from './components/DateOfBirth';
import Address from './components/Address'
import Select from './components/Select'
import RadioGroup from './components/RadioGroup';
import CheckBox from './components/CheckBoxGroup';
import Button from './components/Button';

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
        @media (max-width: 767px){
            flex-direction: column;
        }
`

const Wrapper = styled.div`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        width: 75%;
`;

const schema = yup.object().shape({
    title: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
});

class CustomerForm extends React.Component {
    state = {
        isOn: false,
        values: {},
        hasErrors: false,
    }

    onClick = () => {
        this.setState({
            isOn: !this.state.isOn,
        })
    }

    updateValueInState = ({ target: { name, value, type, checked } }) => {
        if (type === 'checkbox') {
            this.setState({
                values: {
                    ...this.state.values,
                    [name]: checked,
                }
            })
        } else {
            this.setState({
                values: {
                    ...this.state.values,
                    [name]: value,
                }
            })
        }
    }

    submitData = (event) => {
        event.preventDefault();
        const { title, firstName, lastName, email } = this.state.values;
        schema.isValid({
            title,
            firstName,
            lastName,
            email
        })
            .then((valid) => {
                if (valid) {
                    this.submit();
                } else {
                    this.setState({
                        hasErrors: true,
                    });
                }
            });
    }

    submit = () => {
        const url = 'http://localhost:5000/save';
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset = utf-8",
            },
            body: JSON.stringify(this.state.values),
        }).then(
            response => response.text()
        ).then(
            html => console.log(html)
        );
        console.log(JSON.stringify(this.state.values));
        this.setState({
            values: {}
        });

    }

    render() {
        const values = this.state.values;
        return (
            <FormContainer onSubmit={this.submitData}>
                <Wrapper>
                    <Row>

                        <Select label='Title' name='title' selected='Select Title' options={[
                            { label: 'Select Title', value: '' },
                            { label: 'Mr', value: 'Mr' },
                            { label: 'Mrs', value: 'Mrs' },
                            { label: 'Ms', value: 'Ms' },
                        ]}> onChange = {this.updateValueInState}>
                        </Select>

                        <Input label='First Name' id='firstName' value={this.state.values.firstName}
                            onChange={this.updateValueInState} required>
                        </Input>
                    </Row>
                    <Row>
                        <Input label='Middle Name' id='middleName' value={this.state.values.middleName}
                            onChange={this.updateValueInState} required>
                        </Input>
                        <Input label='Last Name' id='lastName' value={this.state.values.lastName}
                            onChange={this.updateValueInState} required>
                        </Input>
                    </Row>
                    <Row>
                        <Input label='Email Address' id='email' type='email' value={this.state.values.email}
                            onChange={this.updateValueInState} required>
                        </Input>
                    </Row>
                    <DateOfBirth label='Date of Birth' onChange={this.updateValueInState}>
                    </DateOfBirth>
                    <Address label='Residential Address' onChange={this.updateValueInState} values={values}> </Address>
                    <Row>
                        <RadioGroup label="Time at this Address" id='time_at_address' name='Time_at_address' onChange={this.updateValueInState}
                            options={[
                                { label: 'Less than 5 years', value: 'LESS_THAN_5_YEARS' },
                                { label: 'More than 5 years', value: 'MORE_THAN_5_YEARS' },
                            ]}
                        ></RadioGroup>
                    </Row>
                    <Row>
                        <CheckBox label = 'Agreed to Terms and Conditions' id = 'terms_and_conditions'
                                onChange = {this.updateValueInState}
                                checked = {this.state.terms_and_conditons} ></CheckBox>
                    </Row>
                    <Row>
                        <Button onClick = {this.onClick}>{this.state.isOn? 'Submitting': 'submit'} </Button>
                    </Row>
                    <Row>
                        {
                            this.state.hasErrors && <p> Check the above fields to proceed</p>
                        }
                    </Row>
                </Wrapper>
            </FormContainer>
        )
    }

}


export {
    Row,
};

export default CustomerForm;