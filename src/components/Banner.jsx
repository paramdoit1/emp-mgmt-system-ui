import styled from 'styled-components';
import React from 'react';

import Header from './Header';

const Image = styled.img `
    height: 4rem;
    weight: 4rem;
`;

const FieldWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkslategray;
`;

const banner = () => {
    return (
        <FieldWrapper>
            <Image src = './image/cart.png'/>
            <Header> Customer Shop</Header>
        </FieldWrapper>
    )
}

export default banner;