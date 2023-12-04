import styled from "styled-components";
import Figure from 'react-bootstrap/Figure';
import React from 'react';
import picture_1 from './Screenshot1.png';
import picture_2 from './Screenshot2.png';
import './funnyshop.css'
import Frame from 'react-frame-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

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


function FunnyShop(){

    const [funnyshopCodeSnippet, setFunnyshopCodeSnippet] = useState(null);
    const [badgeHoverColor, setBadgeHoverColor] = useState(0);
    const [badgeLastActive, setBadgeLastActive] = useState(0);
    const [codeSnippetDiscription, setCodeSnippetDiscription] = useState("");


    return(
        <div className="pt-5 my-0 px-5 pb-5 funnyshop-style"
        style={{
            height: "auto",
            overflow: "hidden",
        }}>
            <p className="pt-5"
            style={{ color: "white",
            }}>
                <StyledTextHead>
                    FunnyShop Pokemon
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
                        <a style={{textDecoration: "none"}} target="_blank" href="https://funnyshop.hamzabakkour.se" class="external link-primary">hamzabakkour.funnyshop.se</a>.
                        <br/>
                        You can use the website to buy pokemon cards. Each card shows the name and the picture of a pokemon along with some stats.
                        <br/>
                        The payment gateway account for this online shop is kept in dev mode.
                        <br/>
                        Which means that you can not use a legit credit card to pay with real money.
                        <br/>
                        Instead, the website will provide you with a credit card number to complete your purchase.
                        <br/>
                        You will receive an email with your order details upon completing a purchase.
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
                        A screenshot from the website funyshop.hamzabakkour.se. 
                    </Figure.Caption>
                </Figure>
                <p className="pt-5">
                    <StyledTextSecondHead>
                        <div>
                            Deployment
                        </div>
                    </StyledTextSecondHead>
                    <StyledTextBody>
                        The website operates on Amazon Elastic Kubernetes Service (EKS) using a cluster of seven Fargate nodes/pods.
                        <br/>
                        Four nodes are dedicated to CorDNS and the AWS Load Balancer Controller, while one is allocated for Nginx.
                        <br/>
                        Another node manages Django, Stripe webhook, and Celery, and the last one serves as the RabbitMQ broker.
                        <br/>
                        All these services are containerized using Docker.
                        <br/>
                        Kubernetes deployments fetch these services images from a private Docker repository.
                    </StyledTextBody>
                </p>
                <Figure className="d-flex flex-column justify-content-center align-items-center pt-4">
                    <Figure.Image
                    rounded
                    width={"85%"}
                    alt="171x180"
                    src={picture_2}
                    style={{
                        shadowOffset: { width: 20, height:20 },
                        shadowOpacity: 5,
                        shadowRadius: 5,
                        boxShadow: '0px 0px 10px #F4AAB9',
                    }}
                    />
                    <Figure.Caption className="text-center"
                    style={{color: "#949494"}}>
                        A diagram showing the deployment of the website funyshop.hamzabakkour.se. 
                    </Figure.Caption>
                </Figure>
                <Container fluid className="pt-5 px-0 m-0"
                style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "1150px",
                }}>
                    <StyledTextSecondHead>
                            Source code
                    </StyledTextSecondHead>
                    <Container className="p-0 m-0"
                    style={{
                    width: "100%",
                    maxWidth: "100%",
                    }}>
                        <Row>
                            <Col>
                                <p>
                                    <StyledTextBody>
                                        The{' '} <a style={{textDecoration: "none"}} target="_blank" href="https://github.com/HamzaBakkour/FunnyShop/tree/main" class="external link-primary">full source code</a>{' '}
                                        is available at github.
                                        <br/>
                                        The website is written using Django and React.
                                        <br/>
                                        <br/>
                                        The React application is deployed with{' '} 
                                        <Badge
                                        as={Button}
                                        bg={ (badgeHoverColor === 1 || badgeLastActive === 1) ? "#340438" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(1); setBadgeLastActive(1);setFunnyshopCodeSnippet("nginx.conf"); setCodeSnippetDiscription("The Nginx configuration file")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor:  (badgeHoverColor === 1 || badgeLastActive === 1) ? "#340438" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                            <strong>Nginx</strong>
                                            
                                            </StyledTextBody>
                                        </Badge>
                                        <br/>
                                        An{' '}
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 2 || badgeLastActive === 2) ? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(2); setBadgeLastActive(2); setFunnyshopCodeSnippet("nginx-ingress.yaml"); setCodeSnippetDiscription("The Nginx ingress file")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (badgeHoverColor === 2 || badgeLastActive === 2) ? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                                ingress service
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        is used to expose HTTP route to the{' '}
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 3 || badgeLastActive === 3) ? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(3); setBadgeLastActive(3);setFunnyshopCodeSnippet("nginx-service.yaml"); setCodeSnippetDiscription("The Nginx service file")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (badgeHoverColor === 3 || badgeLastActive === 3) ? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                                Nginx service
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        <br/>
                                        All HTTP traffic is redirected into HTTPS by the{' '}
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 4 || badgeLastActive === 4) ? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(4); setBadgeLastActive(4);setFunnyshopCodeSnippet("nginx-ingress.yaml"); setCodeSnippetDiscription("The Nginx service file")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (badgeHoverColor === 4 || badgeLastActive === 4) ? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                                ingress service
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        <br/>
                                        React communicates with the backend REST API through a{' '}
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 5 || badgeLastActive === 5)  ? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(5); setBadgeLastActive(5); setFunnyshopCodeSnippet("backend-service.yaml");  setCodeSnippetDiscription("The Django service file")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (badgeHoverColor === 5 || badgeLastActive === 5)  ? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                                Cluster IP service
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        <br/>
                                        The full API documentaion is available{' '}
                                        <a style={{textDecoration: "none"}} target="_blank" href="https://funnyshop.hamzabakkour.se/api/schema/swagger-ui/#/" class="external link-primary">here.</a>{' '}
                                        <br/>
                                        <br/>
                                        
                                        Django uses Celery and RabbitMQ to run two tasks asynchronously.
                                        <br/>
                                        The{' '}
                                        
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 6 || badgeLastActive === 6) ? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(6); setBadgeLastActive(6); setFunnyshopCodeSnippet("order-email-task.py");  setCodeSnippetDiscription("Sending email when order placed task")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor:(badgeHoverColor === 6 || badgeLastActive === 6) ? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                                first task
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        is sending an email with the order details when the user place an order.
                                        <br/>
                                        The{' '}
                                        
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 7 || badgeLastActive === 7)? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(7); setBadgeLastActive(7); setFunnyshopCodeSnippet("payment-email-task.py"); setCodeSnippetDiscription("Sending email when order is payed task")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (badgeHoverColor === 7 || badgeLastActive === 7) ? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                                second task
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        is sending an email when the user pays for the order.
                                        <br/>
                                        <br/>
                                        All services are deployed as docker containers. 
                                        <br/>
                                        There is a total of three deploements.
                                        <br/>
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 8 || badgeLastActive === 8) ? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(8); setBadgeLastActive(8); setFunnyshopCodeSnippet("backend-deployment.yaml"); setCodeSnippetDiscription("Backend deployment")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (badgeHoverColor === 8 || badgeLastActive === 8)? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                            The first
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        deployment is for Django, Stripe and Celery{' '}
                                        <br/>
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 9 || badgeLastActive === 9) ? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(9); setBadgeLastActive(9); setFunnyshopCodeSnippet("nginx-deployment.yaml"); setCodeSnippetDiscription("Nginx deployment")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (badgeHoverColor === 9 || badgeLastActive === 9)? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                            The second
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        deployment is for Nginx{' '}
                                        <br/>
                                        <Badge
                                        as={Button}
                                        bg={(badgeHoverColor === 10 || badgeLastActive === 10) ? "#2b032e" : "primary"}
                                        onMouseEnter = {() => {setBadgeHoverColor(10); setBadgeLastActive(10); setFunnyshopCodeSnippet("rabbitmq-deployment.yaml"); setCodeSnippetDiscription("RabbitMQ deployment")}}
                                        onMouseLeave = {() => setBadgeHoverColor(0)}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (badgeHoverColor === 10 || badgeLastActive === 10) ? "#2b032e" : "primary",
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBody>
                                            The third
                                            </StyledTextBody>
                                        </Badge>{' '}
                                        is for RabbitMQ{' '}
                                        <br/>
                                        <br/>
                                        
                                        
                                    </StyledTextBody>
                                </p>
                            </Col>
                            <Col className="pt-0 m-0"
                            style={{
                            width: "100%",
                            maxWidth: "100%",
                            height: '1000px',
                            }}>
                                <div className="text-center my-0 p-0">
                                    <StyledTextBody>
                                        {codeSnippetDiscription}
                                    </StyledTextBody>
                                </div>
                                <Frame
                                className="p-0 m-0 pt-0"
                                style={{
                                width: "100%",
                                maxWidth: "100%",
                                height: '1500px',
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
                                        }
                                    </style>
                                    <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=${funnyshopCodeSnippet}"></script>
                                    </script>
                                </body>
                                </html>`}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </p>
            <div className="p-4"/>
        </div>
    )
}

export default FunnyShop;
