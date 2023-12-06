import styled from "styled-components";
import Figure from 'react-bootstrap/Figure';
import picture_1 from './Screenshot3.png';
import Frame from 'react-frame-component';


import './postgram.css'

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


function Postgram(){
return(
    <div className="px-5 pt-5 postgram-style"
    style={{
        height: "auto",
        overflow: "hidden",
    }}>
        <p className="pt-5"
        style={{ color: "white",
        }}>
            <StyledTextHead>
                Postgram
            </StyledTextHead>
            <StyledTextSecondHead>
                <div className="pt-5">
                Overview
                </div>
            </StyledTextSecondHead>
        </p>


        <p style={{ color: "white"}}>
            <p>
                <StyledTextBody>
                    The website is availible at{' '} 
                    <a style={{textDecoration: "none", fontWeight: "bold"}} target="_blank" href="https://postgram.hamzabakkour.se/login" class="external link-primary">postgram.hamzabakkour.se</a>.
                    <br/>
                    You use your email to create an account. Once logged in, you can create posts and interact with other users' posts.
                    <br/>
                    The website gives you the ability to edit your profile, change and reset your password.
                </StyledTextBody>
            </p>
            <Figure className="pt-4">
                <Figure.Image
                rounded
                alt="171x180"
                src={picture_1}
                style={{
                    shadowOffset: { width: 20, height:20 },
                    shadowOpacity: 5,
                    shadowRadius: 5,
                    boxShadow: '0px 0px 10px #F4AAB9',
                }}
                />



                
                <Figure.Caption className="text-center"
                style={{color: "#949494"}}>
                    A screenshot from the website postgram.hamzabakkour.se. 
                </Figure.Caption>
            </Figure>

            <p className="pt-5">
                    <StyledTextSecondHead>
                        <div>
                            Deployment
                        </div>
                    </StyledTextSecondHead>
                    <StyledTextBody>
                        The website is deployed on a t3.mdeium EC2 instance using docker-compose. The docker-compose deployment consist of four services.
                        <br/>
                        The first one is Nginx which host the frontend React app. The second service is Django. The third is the Postgrsql database.
                        <br/>
                        The fourth service is Certbot which manages the SSL certificate. The following snippet shows the docker-compose deployment file.
                    </StyledTextBody>
                </p>


                <Figure  className="d-flex flex-column justify-content-center align-items-center pt-4"
                style={{
                width: "100%",
                maxWidth: "100%",
                height: '1134px',
                }}
                >
                    <Frame
                    className="p-0 m-0 pt-0"
                    style={{
                    height: '1100px',
                    width: "60%",
                    maxWidth: "60%",


                    }}
                    initialContent={`
                    <!DOCTYPE html>
                    <html>
                    <head><base target='_blank' /></head>
                    <body>
                        <style>
                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                            body {
                            font: 10px 'Open Sans', sans-serif;
                            mergin: 0px;
                            padding: 0px;
                            overflow: hidden;
                            }
                        </style>
                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=docker-compose.yaml"></script>
                        </script>
                    </body>
                    </html>`}
                    />
                    <Figure.Caption className="text-center pt-0"
                    style={{color: "#949494"}}>
                        The docker-compose deployment file of postgram.hamzabakkour.se. 
                    </Figure.Caption>
                </Figure>

                <p className="pt-5">
                    <StyledTextSecondHead>
                        <div>
                            Source code
                        </div>
                    </StyledTextSecondHead>

                    <StyledTextBody>
                        The {' '}
                        <a style={{textDecoration: "none", fontWeight: "bold"}} target="_blank" href="https://github.com/HamzaBakkour/Postgram/" class="external link-primary">full source code</a>{' '}
                        is available at github.
                        <br/>
                        The website is written using Django and React. The React application is deployed with Nginx.
                        <br/>
                        The Django container exposes port 8000, which React utilizes to communicate with the backend API.
                        <br/>
                        The full API documentaion is available{' '}
                        <a style={{textDecoration: "none", fontWeight: "bold"}} target="_blank" href="https://postgram.hamzabakkour.se/api/schema/swagger-ui/#/" class="external link-primary">here</a>.
                    </StyledTextBody>
                </p>
            </p>
            <div className="p-5"/>
    </div>
)

}

export default Postgram;





