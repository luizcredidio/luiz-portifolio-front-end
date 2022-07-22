import { StyledButton } from "./style";

export default function Button({handleClick, title}){
    function go(){
        window.open(handleClick)
    }
    return(
        <>
        <StyledButton onClick={() => go()}>{title}</StyledButton>
        </>
    )
}