import React, { useEffect } from 'react';
import { 
    Box,
    Button,
    Center,
    Flex,
    Img,
    Spacer 
} from '@chakra-ui/react';
import HeadingCard from './HeadingCard';
import RSVPForm from './RSVPForm';
import { images } from '../../properties/style';
import { getTitlePhrase } from '../../properties/weddinginfo';

function WeddingSite() {
    useEffect(() => {
        document.title = getTitlePhrase();
     }, []);

    return (
        <Box h={2500} bgImage={'url(' + images.bgImage.url + ')'}>
            <Flex color='black'>
                <Button m='4'>First Button!</Button>
                <Button m='4'>Second Button!</Button>
                <Spacer/>
                <HeadingCard />
                <Spacer/>
                <Button m='4'>Third Button!</Button>
                <Button m='4'>Fourth Button!</Button>
            </Flex>
            <Img src={images.banner.url} />
            <Box>This is my center box!</Box>
            <Box>This is my other box!</Box>
            <RSVPForm />
        </Box>
    );
}

export default WeddingSite;