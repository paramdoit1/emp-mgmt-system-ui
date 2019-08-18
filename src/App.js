import React from 'react';
import styled from 'styled-components'

import Banner from './components/Banner';
import CustomerForm from './CustomerForm';
import Sidebar from './components/Sidebar';

const FieldWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 68%;
    margin: 0 auto;
`;

const Row = styled.div `
    display: flex;
    width: 100%
    justify-content: center;
        @media (max-width: 767px) {
            flex-direction: column;
        }
`;

const App = () => (
    <>
        <Banner></Banner>
        <FieldWrapper>
            <CustomerForm/>
            <Sidebar/>
        </FieldWrapper>
    </>
);


export default App;
