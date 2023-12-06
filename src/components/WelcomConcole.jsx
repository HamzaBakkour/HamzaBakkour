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

                <div className="d-flex flex-row">

                    <div class="mx-1 circle-red change-color-red"
                    style={{
                        shadowOffset: { width: 20, height:20 },
                        shadowOpacity: 5,
                        shadowRadius: 5,
                        boxShadow: '0px 0px 10px #F4AAB9',
                    }}
                    />

                    <div class="mx-1 circle-green change-color-orange"
                    style={{
                        shadowOffset: { width: 20, height:20 },
                        shadowOpacity: 5,
                        shadowRadius: 5,
                        boxShadow: '0px 0px 10px #F4AAB9',
                    }}
                    />

                    <div class="mx-1 circle-orange change-color-green"
                    style={{
                        shadowOffset: { width: 20, height:20 },
                        shadowOpacity: 5,
                        shadowRadius: 5,
                        boxShadow: '0px 0px 10px #F4AAB9',
                    }}
                    />

                </div>


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
                        style={{ color: "green",
                        fontFamily: "Lucida Console",
                        textShadow: "green 1px 0 10px"
                        }}>

                        <StyledText>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("Greetings")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" and thank you")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("  for visiting")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" my website.")
                                    .typeString("<br/>")
                                    .pauseFor(randomNumber(500, 1000))
                                    .typeString("<br/>")
                                    .typeString("Next")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" you are going")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" to be presented")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" with two projects")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" that I’ve developed.")
                                    .pauseFor(randomNumber(500, 1000))
                                    .typeString("<br/>")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("<br/>")
                                    .typeString("The first one")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" is an online shop")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" deployed on")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" Amazon Elastic")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" Kubernetes Service (EKS).")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("<br/>")
                                    .typeString("<br/>")
                                    .pauseFor(randomNumber(500, 1000))
                                    .typeString("The second")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" is a social website")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" deployed on")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" an Amazon Elastic")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" Compute Cloud")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" (EC2) instance")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" using Docker Compose.")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("<br/>")
                                    .typeString("<br/>")
                                    .pauseFor(randomNumber(1500, 2000))
                                    .typeString("Feel free to scroll down")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" to explore these")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString(" projects further.")
                                    .typeString("<br/>")
                                    .typeString("<br/>")
                                    .typeString("  Your interest is")
                                    .pauseFor(randomNumber(100, 400))
                                    .typeString("  much appreciated!")
                                    .start();
                            }}
                            options={{
                                delay: 60,
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
