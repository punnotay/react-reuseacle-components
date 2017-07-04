import React from 'react';
import TextInputCSSModule from 'react-play/TextInputCSSModule';

/** Required TextBox w error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputCSSModule 
                htmlId="example-req" label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}