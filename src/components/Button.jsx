import styled from 'styled-components';

const Button = styled.button `
    background-color: ${props=> props.disabled?'yellow':'green'}
    border: 2px solid;
    border-radius: 6px;
    color: ghostwhite;
    text-transform: capitalize;
    margin: 0.1rem;
    padding: 0.25rem 1rem;
    height: 3rem;
    width: 10rem;
    font-size: 20px;
    outline: none;
    justify-content: center;
    :hover  {
        background-color: grey;
    }
`;

export default Button;