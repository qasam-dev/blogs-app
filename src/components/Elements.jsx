import { forwardRef, useId } from "react";
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
  background: radial-gradient(circle at bottom,rgba(50, 100, 180, 0.5) 10%, #212121 70% );
  outline: 0;
}
`

export const Button = ({ children, className = "", ...props }) => {
  return (
    <ButtonStyle {...props} className={`${className}`}>
      {children}
    </ButtonStyle>
  )
}


export const InputStyle = forwardRef(({ label, className, ...props }, ref) => {
  const id = useId()
  return (
    <Box className="w-full">
      {label && <LabelStyle htmlFor={id} className='inline-block mb-1 pl-1' > {label} </LabelStyle>}
      <input
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        id={id}
        {...props}
        ref={ref}
      />
    </Box>
  )
})


export const SelectStyle = forwardRef(({ label, options, className, ...props }, ref) => {
  const id = useId()
  return (
    <Box>
      {label && <LabelStyle> {label} </LabelStyle>}
      <select
        id={id}
        ref={ref}
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {
          options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        }
      </select>
    </Box>
  )
})


