import React from 'react';
import { Heading } from '@chakra-ui/react';
import { getTitlePhrase } from '../../properties/weddinginfo';

function HeadingCard() {
    
    console.log('alreadyhere');
    return (
        <Heading>
            {getTitlePhrase()}
        </Heading>
    );
}

export default HeadingCard;