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
        <Col xs="12" s="6" md="4">
            <Card>
                <CardBody>
                    <CardTitle>{props.character}</CardTitle>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Weight: {props.mass}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default StarWarsCard;