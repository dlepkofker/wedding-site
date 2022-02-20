import React from 'react';
import { Heading } from '@chakra-ui/react';

function test() {
    let weddingData;
    fetch('http://localhost:8080/api/wedding/info')
        .then(response => console.log(response));

    return '3';
}

function getWeddingInfo() {
    let weddingData;
    fetch('/server/src/wedding.json')
        .then(response => response.json())
        .then(data => {
            weddingData = data;
            console.log(data);
        });
    return weddingData;
}

function HeadingCard() {
    return (
        <Heading>{test()}</Heading>
    );
}

export default HeadingCard;