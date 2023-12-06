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
import { useState, useEffect } from 'react';
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

const StyledTextBodyBadge = styled.h4`
    font-family: Kanit, sans-serif;
    font-weight: 600;
`;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function FunnyShop(){

    const [activebadge, setActivebadge] = useState(1);
    const [codeSnippetDiscription, setCodeSnippetDiscription] = useState("The Nginx configuration file");
    const primaryBadgeColor = "#FDF6E3";
    const secondaryBadgeColor = "#8a2191";
    const badgeTextColor = "black";

    return(
        <div className="pt-5 my-0 px-5 pb-5 funnyshop-style"
        style={{
            height: "auto",
            overflow: "hidden",
        }}>
            <div className="pt-5"
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
            </div>
            <div style={{ color: "white"}}>
                <p>
                    <StyledTextBody>
                        The website is availible at{' '} 
                        <a style={{textDecoration: "none", fontWeight: "bold"}} target="_blank" href="https://funnyshop.hamzabakkour.se" class="external link-primary">hamzabakkour.funnyshop.se</a>.
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
                        Kubernetes deployments fetch the images for these services from a private Docker repository.
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
                                <div>
                                    <StyledTextBody>
                                        The{' '} <a style={{textDecoration: "none", fontWeight: "bold"}} target="_blank" href="https://github.com/HamzaBakkour/FunnyShop/tree/main" class="external link-primary">full source code</a>{' '}
                                        is available at github.
                                        <br/>
                                        The website is written using Django and React.
                                        <br/>
                                        <br/>
                                        The React application is deployed with{' '} 
                                        <Badge
                                        as={Button}
                                        bg={ (activebadge === 1 ) ? secondaryBadgeColor : primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(1); setCodeSnippetDiscription("The Nginx configuration file")}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor:  (activebadge === 1 ) ? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                            Nginx
                                            </StyledTextBodyBadge>
                                        </Badge>
                                        <br/>
                                        An{' '}
                                        <Badge
                                        as={Button}
                                        bg={(activebadge === 2) ? secondaryBadgeColor : primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(2); setCodeSnippetDiscription("The Nginx ingress file")}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (activebadge === 2 ) ? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                                ingress service
                                            </StyledTextBodyBadge>
                                        </Badge>{' '}

                                        is used to expose HTTP route to the{' '}
                                        <Badge
                                        as={Button}
                                        bg={(activebadge === 3) ? secondaryBadgeColor : primaryBadgeColor }
                                        onMouseEnter = {() => {setActivebadge(3); setCodeSnippetDiscription("The Nginx service file")}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (activebadge === 3) ? secondaryBadgeColor  : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                                Nginx service
                                            </StyledTextBodyBadge>
                                        </Badge>{' '}
                                        <br/>
                                        All HTTP traffic is redirected into HTTPS by the{' '}
                                        <Badge
                                        as={Button}
                                        bg={(activebadge === 4) ? secondaryBadgeColor : primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(4); setCodeSnippetDiscription("The Nginx ingress file")}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (activebadge === 4)  ? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                                ingress service
                                            </StyledTextBodyBadge>
                                        </Badge>{' '}
                                        <br/>
                                        React communicates with the backend REST API through a{' '}
                                        <Badge
                                        as={Button}
                                        bg={(activebadge === 5) ? secondaryBadgeColor : primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(5); setCodeSnippetDiscription("The Django service file")}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (activebadge === 5)  ? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                                Cluster IP service
                                            </StyledTextBodyBadge>
                                        </Badge>{' '}
                                        <br/>
                                        The full API documentaion is available{' '}
                                        <a style={{textDecoration: "none", fontWeight: "bold"}} target="_blank" href="https://funnyshop.hamzabakkour.se/api/schema/swagger-ui/#/" class="external link-primary">here</a>.{' '}
                                        <br/>
                                        <br/>
                                        
                                        Django uses Celery and RabbitMQ to run two tasks asynchronously.
                                        <br/>
                                        The{' '}
                                        
                                        <Badge
                                        as={Button}
                                        bg={(activebadge === 6)  ? secondaryBadgeColor : primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(6); setCodeSnippetDiscription("Sending email when order placed task")}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor:(activebadge === 6) ? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                                first task
                                            </StyledTextBodyBadge>
                                        </Badge>{' '}
                                        is sending an email with the order details when the user place an order.
                                        <br/>
                                        The{' '}
                                        
                                        <Badge
                                        as={Button}
                                        bg={(activebadge === 7) ? secondaryBadgeColor :primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(7); setCodeSnippetDiscription("Sending email when order is payed task")}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (activebadge === 7) ? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                                second task
                                            </StyledTextBodyBadge>
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
                                        bg={(activebadge === 8)  ? secondaryBadgeColor : primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(8); setCodeSnippetDiscription("Backend deployment");}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (activebadge === 8) ? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                            The first
                                            </StyledTextBodyBadge>
                                        </Badge>{' '}
                                        deployment is for Django, Stripe and Celery{' '}
                                        <br/>
                                        <Badge
                                        as={Button}
                                        bg={(activebadge === 9)? secondaryBadgeColor : primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(9); setCodeSnippetDiscription("Nginx deployment");}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (activebadge === 9) ? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                            The second
                                            </StyledTextBodyBadge>
                                        </Badge>{' '}
                                        deployment is for Nginx{' '}
                                        <br/>
                                        <Badge
                                        as={Button}
                                        bg={(activebadge === 10)? secondaryBadgeColor : primaryBadgeColor}
                                        onMouseEnter = {() => {setActivebadge(10); setCodeSnippetDiscription("RabbitMQ deployment");}}
                                        style={{
                                            height: "29px",
                                            border: "0px",
                                            backgroundColor: (activebadge === 10)? secondaryBadgeColor : primaryBadgeColor,
                                            padding: "5px",
                                            paddingTop: "0px"
                                        }}
                                        >
                                            <StyledTextBodyBadge style={{color:  badgeTextColor}}>
                                            The third
                                            </StyledTextBodyBadge>
                                        </Badge>{' '}
                                        is for RabbitMQ{' '}
                                        <br/>
                                        <br/>
                                        
                                        
                                    </StyledTextBody>
                                </div>
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

                                {(activebadge === 1) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=nginx.conf"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 2) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=nginx-ingress.yaml"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 3) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=nginx-service.yaml"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 4) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=nginx-ingress.yaml"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 5) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=backend-service.yaml"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 6) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=order-email-task.py"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 7) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=payment-email-task.py"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 8) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=backend-deployment.yaml"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 9) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=nginx-deployment.yaml"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                                {(activebadge === 10) &&
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
                                    <div id="root">
                                        <style>
                                            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/solarized-light.css');
                                            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
                                            body {
                                            font: 10px 'Open Sans', sans-serif;
                                            mergin: 0px;
                                            padding: 0px;
                                            }
                                        </style>
                                        <script src="https://gist.github.com/HamzaBakkour/68c7c7fa30ccc516430f029d5dcc1610.js?file=rabbitmq-deployment.yaml"></script>
                                    <div>
                                </body>
                                </html>`}
                                />
                                }

                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
            <div className="p-4"/>
        </div>
    )
}

export default FunnyShop;