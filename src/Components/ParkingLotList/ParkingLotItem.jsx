import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function ParkingLotItem({ 
        id, 
        date, 
        priority, 
        link, 
        description,
        deleteItem
     }) {

    function handleDelete() {
        deleteItem(id);
    }

    return (
        <Card 
            className="my-2 parking-lot-item-container"
        >
            <CardHeader className="card-header">
                {date} (Priority: {priority})
                <Button color="danger" className="delete-button" onClick={handleDelete}>
                    <strong>X</strong>
                </Button>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5" className="description">
                    { description }
                </CardTitle>
                <CardText overflow="hidden">
                    Link:&nbsp;
                    <a href={link} target="_blank" className="parking-lot-item-anchor">
                        { link }
                    </a>
                </CardText>
            </CardBody>
        </Card>
    );
}