import React from "react";
import styled from "styled-components";

import extract_histogram from "../images/showing_extract_histogram.png";
import histogram_dist from "../images/model_hist_plot.png";
import algorithm_detect from "../images/counting_fingers.png";

import sudoku_puzzle from "../images/random_sudoku_puzzle.png"
import sudoku_array from "../images/sudoku_array_unsolved.png"
import solved_puzzle from "../images/sudoku_array_solved.png"

import unity_logo from "../images/unity_logo.jpeg"
import start_menu from "../images/gravity_falls_start.png"
import load_in from "../images/gravity_falls_load_in.png"

const ProjectTitle = {
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: "270%",
    textAlign: "center"
}

const StyledTitle = styled.h2`
    background-color: black;
    color: white;
    font-family: Montserrat, sans-serif;
    padding: 1% 0%;
    padding-left: 3%;
    margin: 0%;
`;

const ImageRowDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3% 5%;
    padding-bottom: 0%;
    justify-content: center;

    img{
        padding-top: 3%;
        padding-bottom: 3%;
        padding-right: 1%;
    }
`;

const DescriptionHeader = styled.h3`
    padding: 0% 5%;
    padding-bottom: 2%;
    font-family: Montserrat, sans-serif;

`

function ProjectComponent(props){
    return(
        <div>
            <StyledTitle>{props.title}</StyledTitle>
            {console.log(props.imageDimensions.image1)}
            <ImageRowDiv>
                <img src = {props.imageList.image1} width = {props.imageDimensions.image1.width} height = {props.imageDimensions.image1.height} alt = {props.imageAlt.image1}/>
                <img src = {props.imageList.image2} width = {props.imageDimensions.image2.width} height = {props.imageDimensions.image2.height} alt = {props.imageAlt.image2}/>
                <img src = {props.imageList.image3} width = {props.imageDimensions.image3.width} height = {props.imageDimensions.image3.height} alt = {props.imageAlt.image3}/>
            </ImageRowDiv>
            <DescriptionHeader>{props.description}</DescriptionHeader>
            
        </div>
    )
};

export default function ProjectList(){
    return(
        <div>
            <h1 style = {ProjectTitle}>Projects</h1>
            <ProjectComponent title = "Hand Detection and Finger Counting (Work In Progress)"
             imageList = {{image1: extract_histogram, image2: histogram_dist, image3: algorithm_detect}}
             imageDimensions = {{image1: {width: "27%", height: "30%"}, image2: {width: "30%", height: "30%"}, image3: {width: "35%", height: "30%"}}}
             imageAlt = {{image1: "Generating histogram with hand", image2: "Histogram Distribution", image3: "Hand Detection In Action"}}
             description = "{Insert Project Description}"/>

            <ProjectComponent title = "Sudoku Solver (Currently Attempting to Implement CSP Algorithm)"
             imageList = {{image1: sudoku_puzzle, image2: sudoku_array, image3: solved_puzzle}}
             imageDimensions = {{image1: {width: "30%", height: "30%"}, image2: {width: "33%", height: "30%"}, image3: {width: "25%", height: "30%"}}}
             imageAlt = {{image1: "Sudoku Puzzle Wikipedia", image2: "Sudoku Array In C", image3: "Solved Sudoku Puzzle"}}
             description = "{Insert Project Description}"/>

            <ProjectComponent title = "'Gravity Falls' Unity Game Project"
             imageList = {{image1: unity_logo, image2: start_menu, image3: load_in}}
             imageDimensions = {{image1: {width: "40.5%", height: "40%"}, image2: {width: "48%", height: "30%"}, image3: {width: "48%", height: "40%"}}}
             imageAlt = {{image1: "Unity Logo", image2: "Game Start Menu", image3: "First Level of Game"}}
             description = "{Insert Project Description}"/>
        </div>
    )
};
