import styled from 'styled-components';
import React from 'react';

const Image = styled.img `
    height: 4rem;
    width: 4rem;
`;

const FieldWrapper = styled.div   `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: lightgray;
    flex-basis: 50%;
`;

const SidebarContentWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SidebarHeader = styled.h3 `
    display: flex;
    font-size: 18px;
    font-family: sans-serif;
    text-transform: uppercase;
`;

const SidebarContent = styled.div `
    display: flex;
    font-size: 14px;
    font-family: sans-serif;
`;


const SidebarFooter = styled.div   `
    margin-bottom: 36rem;
`;

const Sidebar = () => {
    return (
        <FieldWrapper>
            <Image src = 'image/cart.png'/>
            <SidebarContentWrapper>
                <SidebarHeader>Customer deals</SidebarHeader>
                <SidebarContent>Low Price</SidebarContent>
                <SidebarContent>Available for low downpayment</SidebarContent>
                <SidebarContent>High quality Products</SidebarContent>
                <SidebarContent>30 days return policy. 100% return guranteed</SidebarContent>
            </SidebarContentWrapper>

        </FieldWrapper>

    )
}

export default Sidebar;
