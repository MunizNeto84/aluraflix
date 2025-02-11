import styled from "styled-components";
const Form = styled.form`
  padding: 1.25rem 0;

  label {
    position: relative;
    margin: 5px;
    align-self: flex-start;
    text-align: left;
    width: 100%;
  }

  button {
    margin: 10px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

export default Form;
