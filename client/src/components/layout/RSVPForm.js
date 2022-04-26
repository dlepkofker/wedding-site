import React from 'react';
import { 
    Box, 
    FormControl,
    FormHelperText,
    FormLabel,
    Input, 
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

function RSVPForm(){
    const [codeChars, setCodeChars] = React.useState('');
    const [numGuests, setNumGuests] = React.useState(1);
    const handleCodeChange = (event) => {
        const len = event.target.value.length;
        if(len <= 6) {
            setCodeChars(event.target.value.toUpperCase());
        }
    }

    const handleNumGuestChange = (event) => {
        setNumGuests(parseInt(event));
    }

    return (
        <Box>
            <FormControl isRequired>
                <FormLabel htmlFor='firstName'>First Name</FormLabel>
                <Input
                    isRequired
                    id='firstName'
                    type='text'
                    size='md'
                    htmlSize={56}
                    width='auto'
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                <Input
                    isRequired
                    id='lastName'
                    type='text'
                    size='md'
                    htmlSize={56}
                    width='auto'
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    isRequired
                    id='email'
                    type='text'
                    size='md'
                    htmlSize={56}
                    width='auto'
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel htmlFor='attending'>Guests Attending</FormLabel>
                <NumberInput
                    isRequired
                    id='numAttending'
                    onChange={handleNumGuestChange}
                    defaultValue={1}
                    min={1}
                    max={20}
                    keepWithinRange={true}
                    size='md'
                    width={20}
                >
                <NumberInputField id='attending' />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
                </NumberInput>
            </FormControl>
            {
                [...Array(numGuests-1)].map(function(_, i){
                    return (
                        <Box key={i}>
                            <FormControl isRequired>
                                <FormLabel htmlFor={'guest_'+(i+2)+'_fn'}>{'Guest ' + (i+2) + ' First Name'}</FormLabel>
                                <Input
                                    isRequired
                                    id={'guest_'+(i+2)+'_fn'}
                                    type='text'
                                    size='md'
                                    htmlSize={56}
                                    width='auto'
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor={'guest_'+(i+2)+'ln'}>{'Guest ' + (i+2) + ' Last Name'}</FormLabel>
                                <Input
                                    isRequired
                                    id={'guest_'+(i+2)+'_ln'}
                                    type='text'
                                    size='md'
                                    htmlSize={56}
                                    width='auto'
                                />
                                </FormControl> 
                        </Box>
                    );                       
                })
            }
            <FormControl isRequired>
                <FormLabel htmlFor='code'>Code</FormLabel>
                <Input 
                    isRequired 
                    id='code' 
                    value={codeChars}
                    onChange={handleCodeChange}
                    type='text'
                    size='md'
                    htmlSize={20}
                    width='auto'
                />
                <FormHelperText>Located on your invitation</FormHelperText>
            </FormControl>
        </Box>
    );
}

export default RSVPForm;