import React from 'react';
import TextInputBEM from 'react-play/TextInputBEM';

/** Required TextBox w error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputBEM
                htmlId="example-opt" label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}