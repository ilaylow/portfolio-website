import React from "react";
import {AiFillLinkedin} from '@react-icons/all-files/ai/AiFillLinkedin';
import {AiFillGithub} from '@react-icons/all-files/ai/AiFillGithub';
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: #0093E9;
    background-image: linear-gradient(120deg, #0093E9 0%, #80D0C7 100%);
    display: flex;
    justify-content: left;
    padding: 0;
    padding-left: 2%;
    font-size: 100%;
    font-family: 'Open Sans', sans-serif;
    align-items: center;

    ul {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-gap: 2%;
        justify-content: end;
        width: 86vw;
    }

    a {
        color: inherit;
    }
`;

export default function MiniHeader(){
    return(
        <HeaderDiv>
            <h1>ileylow</h1>
            <ul>
                <a href = "https://github.com/ilaylow"><AiFillGithub size = {70}/></a>
                <a href = "https://www.linkedin.com/in/low-chuen-ley-517589158/"><AiFillLinkedin size = {70}/></a>
            </ul>
        </HeaderDiv>
    )
}