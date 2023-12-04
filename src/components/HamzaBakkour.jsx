import "./hamzabakkour.css"
import styled from "styled-components";




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


function HamzaBakkour(){
    return(
        <div className="pt-5 my-0 px-5 pb-5 hamzabakkour-style"
        style={{
            height: "auto",
            // height: "1000px",

            overflow: "hidden",
        }}>
            <p className="pt-5"
            style={{ color: "white",
            }}>
                
                <StyledTextHead>
                    HamzaBakkour.se
                </StyledTextHead>
                <p className="pt-5" style={{ color: "white"}}>
                    <p>
                        <StyledTextBody>
                            This is the webiste that you are currently browsing <span>&#128568;</span>
                            <br/>
                            As you already know its available at{' '}
                            <a style={{
                                textDecoration: "none",
                                color: "#050836"}}
                            target="_blank"
                            href="https://hamzabakkour.se"
                            class="external ">hamzabakkour.se</a>

                            <br/>
                            The{' '}
                            <a style={{textDecoration: "none",
                                        color: "#050836"}}
                                        target="_blank" href="https://funnyshop.hamzabakkour.se"
                                        class="external">
                                        full source code</a>{' '}
                            is available on github.
                            <br/>
                            <br/>
                            The website is powered by react, is hosted on an S3 bucket and accessible through CloudFront.
                        </StyledTextBody>

                    </p>
                </p>
            </p>
            <div className="p-4"/>
        </div>
    )
}



export default HamzaBakkour;