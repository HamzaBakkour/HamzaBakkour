import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Figure from 'react-bootstrap/Figure';
import styled from "styled-components";

import "./aboutme.css"
import ny_image from "./image_1.jpeg"





const StyledTextHead = styled.h1`
    font-family: Kanit, sans-serif;
    font-weight: 600;
`;

const StyledTextSecondHead = styled.h2`
    font-family: Kanit, sans-serif;
    font-weight: 600;
`;


const StyledTextBody = styled.h4`
    font-family: Kanit, sans-serif;
    font-weight: 300;
`;





function AboutMe(){

    return(
        <div  className="d-flex px-5 pt-0 aboutme-style"
        style={{
            // height: "auto",
            height: "900px",
            overflow: "hidden",
        }}>
        <p className="pt-5"
        style={{ color: "white",
        }}>
        
            <div className="p-5"/>
            {/* <div className="p-2"/> */}
            <Container
            style={{
            }}
            className='p-0'>
                <StyledTextSecondHead className='pb-3'>
                    About me
                </StyledTextSecondHead>
                <div style={{
                    borderLeft: "4px solid white",
                    height: "500px",
                    background: "#292929",
                    }}>

                    <Container className='d-flex flex-column'>
                    <Figure className="pt-4 px-4">
                        <Figure.Image
                        rounded
                        width={170}
                        alt="171x180"
                        src={ny_image}
                        />
                    </Figure>
                    <StyledTextBody className='pt-2 px-3'>
                        I'm a 30 yo full-stack developer on the lookout for a new career opportunities.
                        <br/>
                        Proficient in Python and React, my journey as a self-learned developer has
                        <br/>
                        instilled in me a love for continuous learning. 
                        <br/>
                        I'm actively seeking an environment that emphasis meaningful collaboration. 
                        <br/>
                        Beyond coding, I find joy in reading, music and spending time with friends.
                        <br/>
                        <br/>
                        I can be reached out at alexander.x4.hb@outlook.com

                    </StyledTextBody>
                    </Container>
                </div>


                

            </Container>
            </p>
        </div>
        
    )
}


export default AboutMe;



// aboutme-style