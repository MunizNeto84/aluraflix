import styled from "styled-components";
const Form = styled.form`
  padding: 1rem 0;

  label {
    margin: 5px;
    text-align: left;
    width: 100%;
  }

  button {
    margin: 15px;
  }

  @media (max-width: 520px) {
    label {
      margin: 5px;
      text-align: left;
      width: 90%;
    }
  }
`;

export default Form;
