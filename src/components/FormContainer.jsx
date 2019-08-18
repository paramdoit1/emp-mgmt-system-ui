import styled from 'styled-components';

const FormContainer = styled.form  `
    display: flex;
    flex-direction: column;
    width: 100%
    margin: 0 autol
        @media (max-width: 767px) {
            flex-direction: column;
            width: 100%;
        }
`;

export default FormContainer;