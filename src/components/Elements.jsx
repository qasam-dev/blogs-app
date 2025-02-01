import styled from "styled-components";



export const Box = styled.div`
background-color:${({ bg }) => (bg ? bg : '')};
font-size: ${(props) => (props.size ? props.size : '')};
font-weight: ${(props) => (props.weight ? props.weight : "")};
font-family: ${(props) => (props.family ? props.family : "")};
color: ${(props) => (props.color ? props.color : "")};
line-height: ${(props) => (props.lh ? props.lh : "")};
`

export const Span = styled.span`
background-color: ${({ bg }) => (bg ? bg : "")};
font-size: ${(props) => (props.size ? props.size : '')};
font-weight: ${(props) => (props.weight ? props.weight : "")};
font-family: ${(props) => (props.family ? props.family : "")};
color: ${(props) => (props.color ? props.color : "")};
line-height: ${(props) => (props.lh ? props.lh : "")};
`


export const HeadingStyle = styled.div`
  font-size: ${(props) => (props.size ? props.size : '')};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  font-family: ${(props) => (props.family ? props.family : "")};
  color: ${(props) => (props.color ? props.color : "")};
  line-height: ${(props) => (props.lh ? props.lh : "")};
`
export const TextStyle = styled.p`
  font-size: ${(props) => (props.size ? props.size : '')};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  font-family: ${(props) => (props.family ? props.family : "")};
  color: ${(props) => (props.color ? props.color : "")};
  line-height: ${(props) => (props.lh ? props.lh : "")};
`
export const LabelStyle = styled.label`
  font-size: ${(props) => (props.size ? props.size : '')};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  font-family: ${(props) => (props.family ? props.family : "")};
  color: ${(props) => (props.color ? props.color : "")};
  line-height: ${(props) => (props.lh ? props.lh : "")};
`


export const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 1em;
  font-size: 1em;
  width: 7em;
  aspect-ratio: 1/0.25;
  color: white;
  background: #212121;
  background-size: cover;
  background-blend-mode: overlay;
  border-radius: 0.5em;
  outline: 0.1em solid #353535;
  border: 0;
  box-shadow: 0 0 1em 1em rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
  transform: scale(1.1);
  box-shadow: 0 0 1em 0.45em rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, #212121, #252525);
  background: radial-gradient(
    circle at bottom,rgba(50, 100, 180, 0.5) 10%, #212121 70% );
  outline: 0;
}
`




export const Button = ({ children, type = "", className = "", ...props }) => {
  return (
    <ButtonStyle type={type} {...props} className={`${className}`}>
      {children}
    </ButtonStyle>
  )
}


