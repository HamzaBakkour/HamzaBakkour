import Typewriter from "typewriter-effect";
import styled from "styled-components";
import './console.css'

const StyledTextInit = styled.h2`
    font-family: Kanit, sans-serif;
    font-size: 30px;
    font-weight: 600;
`;

const StyledText = styled.h2`
    font-family: Kanit, sans-serif;
    font-size: 30;
    font-weight: 600;
`;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function WelcomConsole(){

    return (

        <div className="d-flex p-5 console-style"
        style={{
                height: "100vh",
                width: "100%"}}>

        <div className="border border-3 rounded-4"
        style={{
            height: "90vh",
            width: "100%"
        }}>
                <div className="px-4 mt-4 ">
                    <span className="px-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        color="#80340b"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                        </svg>
                    </span>

                    <span className="px-2">

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#915b0f"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-circle-fill"
                    viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                    </svg>
                    </span>


                    <span className="px-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#398510"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-circle-fill"
                    viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                    </svg>
                    </span>
                </div>


                <div className="d-flex flex-row p-4">

                <div>
                    <h1 className="p-2"
                        style={{ color: "blue",
                        fontFamily: "Lucida Console",
                        }}>
                        <StyledTextInit>
                            Itsme@hamzabakkour_>
                        </StyledTextInit>
                    </h1>
                </div>

                <div>
                    <h1 className="p-2"
                        style={{ color: "white",
                        fontFamily: "Lucida Console",
                        }}>

                        <StyledText>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(randomNumber(3000, 4000))
                                    .typeString("Hello")
                                    .pauseFor(randomNumber(1000, 2000))
                                    .typeString(" and thank you")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" for vesting")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" my website.")
                                    .typeString("<br/>")
                                    .pauseFor(randomNumber(1500, 2000))
                                    .typeString("Next")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" you are going")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" to be presented")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" with two projects")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" that I’ve made.")
                                    .pauseFor(randomNumber(1000, 2000))
                                    .typeString("<br/>")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("<br/>")
                                    .typeString("The first one")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" is an online shop")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" deployed on")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" Amazon Elastic Kubernetes Service.")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("<br/>")
                                    .pauseFor(randomNumber(2000, 3000))
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("The second")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" is a social website")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" deployed on")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" Amazon Elastic")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" Compute Cloud")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" (EC2) instance")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" using Docker Compose.")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("<br/>")
                                    .typeString("<br/>")
                                    .pauseFor(randomNumber(2000, 3000))
                                    .typeString("Please scroll down")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" to continue ")
                                    .start();
                            }}
                            options={{
                                delay: 70,
                            }}
                            />
                        </StyledText>
                    </h1>
                </div>
            </div>
        </div>
        </div>
    );
}

export default WelcomConsole

