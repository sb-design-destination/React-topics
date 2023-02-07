import React, { Component } from 'react';

class Dialogcompo extends Component {
    render() {
        return (
            <>
                <div style={{ border: "1px solid blue", background:"grey",width:"50%" }} >
                    {this.props.title}
                <p> {this.props.children}</p>

            </div>
            </>
        );
    }
}

export default Dialogcompo;