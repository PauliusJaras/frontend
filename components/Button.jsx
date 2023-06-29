import { styled, css } from "styled-components";

export const ButtonStyle = css`
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  display: inline-flex;
  align-items: center;
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 2px solid #fff;
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: #5542f6;
      border: 2px solid #5542f6;
      color: #fff;
    `}
    ${(props) =>
    props.primary && props.outline &&
    css`
      background-color: transparent;
      border: 2px solid #5542f6;
      color: #5542f6;
    `}
${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      svg {
        height: 20px;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return (
    <>
      <StyledButton {...rest}>{children}</StyledButton>
    </>
  );
}
