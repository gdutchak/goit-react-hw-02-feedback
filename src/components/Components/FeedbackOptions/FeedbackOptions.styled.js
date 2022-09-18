import styled from "styled-components";

export const FeedbackButton = styled.button`
display: inline-block;
margin-right: 10px;
width: 70px;
height: 30px;
font-size: 16px;
background-color: white;
border: 1px solid bisque;
padding: 0;
cursor: pointer;
border-radius: 4px;
&:hover, &:focus {
    background-color: blue;
    border: 2px solid bisque;
    color: white;
}
`