import React from "react";
import styled from "styled-components";

const ProjectTitle = {
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: "270%",
    textAlign: "center"
}

const StyledTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    padding-left: 3%;
`

function ProjectComponent(props){
    return(
        <StyledTitle>{props.title}</StyledTitle>
    )
};

export default function ProjectList(){
    return(
        <div>
            <h1 style = {ProjectTitle}>Projects</h1>
            <ProjectComponent title = "Hand Detection and Finger Counting"/>
        </div>
    )
};