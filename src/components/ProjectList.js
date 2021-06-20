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
    line-height: 1.5;
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
            {props.description.map((desc) => <DescriptionHeader>{desc}</DescriptionHeader>)}
            
        </div>
    )
};

const project1Description = [
    "The Project attempts to perform the detection of a human's hand while taking skin colour variation into account. Upon performing a valid detection, the algorithm uses a mask of the hand to perform finger counting (shown in the image above) and even mouse finger tracking (albeit, not entirely stable). The algorithm uses the backprojection algorithm provided by the OpenCV Library. To provide a brief summary, backprojection is a way of recording the color distribution of a given image and using said distribution to map areas of a test image that correspond to the same color values. More information can be found on this webpage: https://docs.opencv.org/3.4/da/d7f/tutorial_back_projection.html",
    
    "Step by step, the program first requires you to take an image of your hand, which then produces a histogram distribution. It then uses backprojection upon trying to detect your hand when attempting any of the above mentioned applications. More work is currently needed on the project and any new inputs or advice is very much welcome!"]

const project2Description = [
    "This project was an attempt to produce a quick sudoku solver made by my first year self, which uses a backtracking method to solve Sudoku, which I've lately realised, can also be recognized as a Constraint Satisfaction Problem. A CSP can be defined as a problem whose state must satisfy a list or set of constraints/limitations. Sudoku can be thought of as a CSP as its state at all times has to satisfy a specific set of rules in order to be solved. E.g. No same number in the same 3x3 Grid, Row or Column. More information can be found on CSPs and BackTracking in these two links: https://www.geeksforgeeks.org/backtracking-introduction/, https://en.wikipedia.org/wiki/Constraint_satisfaction_problem",

    "The algorithm sits in a single C file where the sudoku array can be edited and changed to solve any one puzzle. I'm currently attempting to produce a more efficient algorithm with the assistance of some research into the use Backtracking in Constraint Search Problems."]

const project3Description = [
    "In the Second Semester of my Second Year of University, I, along with a couple of friends attempted to build a working Unity 3D Platformer with a twist of some added Gravity Controls, namely the ability to swap change the Gravitational Direction of the player throughout the level. There are initially tutorial levels included within the game to assist the player in getting used to the controls. There are then 3 separate rooms which the player must traverse through to unlock the door to the final level. The game repository is not public however if you're interested, do feel free to shoot an email in testing it out!",

    "Building the game was a good opportunity in getting familiar with certain aspects of Game Development, using the Unity Engine and also learning about GOOD (Good Object Oriented Design) through the use of C#."]

export default function ProjectList(){
    return(
        <div>
            <h1 style = {ProjectTitle}>Projects</h1>
            <ProjectComponent title = "Hand Detection and Finger Counting (Work In Progress)"
             imageList = {{image1: extract_histogram, image2: histogram_dist, image3: algorithm_detect}}
             imageDimensions = {{image1: {width: "27%", height: "30%"}, image2: {width: "30%", height: "30%"}, image3: {width: "35%", height: "30%"}}}
             imageAlt = {{image1: "Generating histogram with hand", image2: "Histogram Distribution", image3: "Hand Detection In Action"}}
             description = {project1Description}/>

            <ProjectComponent title = "Sudoku Solver (Currently Attempting to Implement More Efficient Algorithm)"
             imageList = {{image1: sudoku_puzzle, image2: sudoku_array, image3: solved_puzzle}}
             imageDimensions = {{image1: {width: "30%", height: "30%"}, image2: {width: "33%", height: "30%"}, image3: {width: "25%", height: "30%"}}}
             imageAlt = {{image1: "Sudoku Puzzle Wikipedia", image2: "Sudoku Array In C", image3: "Solved Sudoku Puzzle"}}
             description = {project2Description}/>

            <ProjectComponent title = "'Gravity Falls' Unity Game Project"
             imageList = {{image1: unity_logo, image2: start_menu, image3: load_in}}
             imageDimensions = {{image1: {width: "40.5%", height: "40%"}, image2: {width: "48%", height: "30%"}, image3: {width: "48%", height: "40%"}}}
             imageAlt = {{image1: "Unity Logo", image2: "Game Start Menu", image3: "First Level of Game"}}
             description = {project3Description}/>
        </div>
    )
};
