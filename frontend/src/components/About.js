import { Col, Container, Row, Image } from 'react-bootstrap';
import Banner from './Banner'
function About() {
    return ( <>
    
    <Banner/>

    <Container>
        <Row>
        <Col></Col>
                <Col md="auto">
                <h2>About</h2>
                </Col>
                <Col></Col>
        </Row>

        <Row style={{padding:"50px"}}>
            <Col md={6} style={{
                 "margin":"0",
                 top:"50%",
                 display:"flex",
                 justifyContent:"center",
                 alignItems:"center"
            }}>
                <span><h3>BRINGING YOU THE <br /> <strong style={{color:"#E9A178"}}>BEST</strong> AUDIO GEAR</h3> 
                <br />
                <p style={{color:"#00000080"}}>Welcome to our decentralized music store! We are a team of music enthusiasts who believe in the power of blockchain technology to revolutionize the way music is distributed, shared, and consumed.

Our mission is to create a platform that empowers independent artists and musicians to showcase their work and reach a global audience without the need for intermediaries or centralized authorities. By leveraging the benefits of decentralized systems, we can provide a fairer, more transparent, and more secure environment for artists, fans, and music lovers alike.

We are committed to promoting diversity, inclusivity, and creativity in the music industry. Our platform is designed to provide a level playing field for all artists, regardless of their genre, background, or location. We believe that music should be accessible to everyone, and our decentralized approach ensures that no one is left out or excluded.</p>
                </span>
            
            
            </Col>
            <Col md={6}>
            <Image 
            style={{maxHeight:"40rem"}}
            src='https://plus.unsplash.com/premium_photo-1679966786295-50d007ad2cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80' />
            </Col>
        </Row>


    </Container>
    
    </> );
}

export default About;