import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NFTCollection from '../assets/img/NFTCollection.png'
const Home = () => {
    return (
        <div className='Home1'>
            <Container className='my-5'>
                <Row className='header'>
                    <Col md={5} className='header-a'>
                        <h2>
                            UTILIZA TUS CRIPTOMONEDAS, <br />
                        </h2>
                        <h1>
                            PARA ACCEDER AL MERCADO INMOBILIARIO MEXICANO
                        </h1>
                        <p>
                            DOMO integra el mundo de las criptomonedas al mercado inmobiliario, beneficiando a inversionistas,propietarios y, sobre todo, familias.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src={NFTCollection} alt="" id='NFTCollection' />
                        <svg width="757" height="170" viewBox="0 0 757 170" fill="none" xmlns="http://www.w3.org/2000/svg" id='svg-glass'>
                            <g filter="url(#filter0_b_41_1175)">
                                <path d="M757 30C757 13.4315 743.569 0 727 0H30C13.4315 0 0 13.4315 0 30V170H757V30Z" fill="url(#paint0_linear_41_1175)" fill-opacity="0.6" />
                                <path d="M727 1H30C13.9838 1 1 13.9837 1 30V169H756V30C756 13.9837 743.016 1 727 1Z" stroke="url(#paint1_linear_41_1175)" stroke-width="2" />
                            </g>
                            <defs>
                                <filter id="filter0_b_41_1175" x="-24" y="-24" width="805" height="218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_41_1175" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_41_1175" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_41_1175" x1="73.1827" y1="22.2198" x2="724.027" y2="114.48" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#303440" />
                                    <stop offset="1" stop-color="#393F4F" stop-opacity="0.51" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_41_1175" x1="540.338" y1="-26.2134" x2="542.625" y2="155.24" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </Col>
                </Row>
                <div className='regis1'>
                    <button className='btn-regis1'>
                        Registrate
                    </button>
                </div>
            </Container>
        </div>
    );
};
Home
export default Home;