import React from 'react';
import { 
    Box,
    Button,
    Flex,
    Spacer 
} from '@chakra-ui/react';
import HeadingCard from './HeadingCard';

function WeddingSite() {
    return (
        <Box>
            <Flex color='black'>
                <Button m='4'>First Button!</Button>
                <Button m='4'>Second Button!</Button>
                <Spacer/>
                <HeadingCard />
                <Spacer/>
                <Button m='4'>Third Button!</Button>
                <Button m='4'>Fourth Button!</Button>
            </Flex>
            <Box>This is my center box!</Box>
            <Box>This is my other box!</Box>
        </Box>
    );
}

export default WeddingSite;