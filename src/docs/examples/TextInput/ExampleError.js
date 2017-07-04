import React from 'react';
import TextInput from 'react-play/TextInput';

/** Required TextBox w error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInput 
                htmlId="example-req" label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}