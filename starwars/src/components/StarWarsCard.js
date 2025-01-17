import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col
} from 'reactstrap';

import './StarWarsCard.css';

function StarWarsCard(props) {
    return (
        <Col xs="12" s="12" md='4'>
            <Card>
                <CardBody>
                    <CardTitle>{props.character}</CardTitle>
                    <CardSubtitle>They have {props.eyeColor} eyes</CardSubtitle>
                    <CardText>Height: {props.height}cm</CardText>
                    <CardText>Weight: {props.mass}kg</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default StarWarsCard;