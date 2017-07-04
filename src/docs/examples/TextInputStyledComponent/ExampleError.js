import React from 'react';
import TextInputStyledComponent from 'react-play/TextInputStyledComponent';

/** Required TextBox w error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputStyledComponent
                htmlId="example-req" label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}