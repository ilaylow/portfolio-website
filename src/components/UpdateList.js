import React from "react";
import styled from "styled-components";

const CurrentWorkDiv = styled.div`
    background-color: lightgrey;
    font-family: Montserrat, sans-serif;
    padding-bottom: 1.5%;
`

const Header2Style = {
    margin: "0",
    fontSize: "200%",
    fontWeight: "bolder",
    paddingTop: "1%",
    paddingBottom: "1%",
    fontFamily: 'Titillium Web, sans-serif',
    backgroundColor: "darkgrey",
}

const StyledPara = styled.p`
    font-weight: bold;
    line-height: 1.5;
`
const TitleStyle = {
    fontStyle: "italic",
}

export default function WorkingList(){
    return (
        <CurrentWorkDiv>
            <h2 style = {Header2Style}>Things I'm Currently Working On!</h2>
            <ul>
                <h3 style = {TitleStyle}>
                    Implementing NEAT (Neuro-Evolution Of Augmenting Topologies) AI + Space Invaders
                </h3>
                <ul>
                    <StyledPara>
                        The NEAT algorithm can be defined as an algorithm that continuously generates neural networks of succeeding generations.
                        It's a very popular choice when trying to develop an AI to perform simple tasks through multiple trial and errors of the task.
                        An example would be generating a neural network to play the game Flappy Bird. Here's an awesome video of it being implemented to
                        do just that! Link: https://www.youtube.com/watch?v=wQWWzBHUJWM&ab_channel=TechWithTim
                    </StyledPara>
                    <StyledPara>
                        I currently plan on using it to develop an AI that manages to play the game Space Invaders and obtain
                        the highest score possible!
                    </StyledPara>
                </ul>

                <h3 style = {TitleStyle}>
                    Computer Vision on Hand Tracking and Finger Tracking
                </h3>
                <ul>
                    <StyledPara>
                        I'm currently working on an algorithm that can confidently detect a persons skin and more
                        specifically their hand! Currently I'm doing this through the use of the HSV colour space and backprojection.
                        However this method currently introduces too much noise and instability when attempting to scan the hand to perform other
                        additional tasks. A couple of the tasks that can be performed once the hand is detected confidently is Finger Counting and Mouse Tracking.
                        A current existing implementation can be seen below or on my GitHub!
                    </StyledPara>
                </ul>
                <h3 style = {TitleStyle}>
                    Wheat Detection with Machine Learning using TensorFlow (With CSIRO)
                </h3>
                <ul>
                    <StyledPara>
                        On the side, I'm also finishing up a research project with CSIRO, Australia's National Science Agency. The 
                        project utilises Computer Vision and Tensorflow's Object Detection API to perform detection of wheat seedlings within
                        thousands of hand taken images within the field. Unfortunately not too much information can be disclosed on this however,
                        a paper on it will be released in the near future!
                    </StyledPara>
                </ul>

            </ul>
        </CurrentWorkDiv>
    )
}