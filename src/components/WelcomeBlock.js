import React from "react";
import styled from "styled-components";
import profile_pic from '../images/pic_of_me.jpeg'
import '../transition.css'

const WelcomeDiv = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
`
const StyledHeader = styled.h1`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 9000;
    padding-top: 1%;
    padding-bottom: 1%;
    font-size: 280%;
    margin: 0;
    background-color: black;
    color: white;
`;

const StyledPara = styled.p`
    padding-top: 1%;
    margin-left: auto;
    margin-right: 8%;
    width: 80%;
    text-align: center;
    line-height: 1.7;
    font-weight: bold;
    color: white;
`

export default function Welcome(){
    return(
        <div style = {{fontFamily: ""}}>
            <StyledHeader className = "fade-in-text">Welcome! よこそう</StyledHeader>
            <WelcomeDiv>
                <img style = {{marginLeft: "8%"}}src={profile_pic} alt = "Me" width="400" height="400"/>
                <div>
                    <StyledPara>
                        Hi there! こんにちは! Thanks for checking out my page! I'm Ley and I'm currently a third year undergraduate student 
                        studying Computing and Software Systems at the University of Melbourne! I've just created this page
                        to mostly refine my web development skills and showcase some of the things I've worked on within my
                        past few years as a student. I mostly specialise in Machine Learning with Convolutional Neural Networks
                        paired with Computer Vision. I'm also mostly a Python enthusiast!
                    </StyledPara>

                    <StyledPara>
                        Apart from my passions in Programming and Machine Learning, I also take a deep interest in Japan and in
                        learning the language as well! I wouldn't consider myself entirely fluent however I believe I'm comfortable
                        in speaking about things like... the weather. Regardless, I do aim to one day pursue a career in Japan!
                    </StyledPara>

                    <StyledPara>
                        I also enjoy playing the piano however I'm not classically trained and only play by ear hence I'm
                        certainly not as confident as many others in my abilities but regardless that won't stop me from playing
                        some of my favourite tunes!
                    </StyledPara>
                </div>
            </WelcomeDiv>
        </div>
    )
}