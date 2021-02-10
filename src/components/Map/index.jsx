import React from 'react'
import { textColorPrimary } from '../../constants'
import { Col, Container, Row } from 'react-bootstrap';

const Map = () => {
    const redirect = () => {
        const url = "https://www.google.com/maps/place/Vasthu+Sree/@9.943643,76.3119695,17z/data=!3m1!4b1!4m5!3m4!1s0x3b0873465ab40d3d:0xa92f41bd41ae11d!8m2!3d9.943643!4d76.3141582";
        var win = window.open(url, '_blank');
        win.focus();
    }
    return (
        <>
         <div
          style={{ fontSize: 35, marginBottom: 25, color: textColorPrimary }}
        >
          Location
        </div>
        <Container>
            <Row>
                <Col md={6}>
            <img 
            onClick={redirect}
            style={{
                width:"100%", 
                boxShadow: "0 0 30px -5px black",
                padding: 10,
                cursor:"pointer"
          }} alt="location" src="images/location.png" />

                </Col>
                <Col md={6}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Map
