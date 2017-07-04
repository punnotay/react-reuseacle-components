import React from 'react';
import TextInput from 'react-play/TextInput';

/** Optopnal TextBox */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInput 
                htmlId="example-opt" label="First Name"
                name="firstname"
                onChange={() => {}}
            />
        )
    }
}