import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';

// for reference:
// https://google.github.io/typograms/

class Typogram extends Component {
    constructor() {
        super()
        this.id = uuidv4()
    }

    componentDidMount() {
        const script = document.getElementById(this.id)
        if (!script) return
        const svg = window.createTypogram(script)
        script.parentNode.insertBefore(svg, script.nextSibling)

    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <script id={this.id} type="text/typogram">
                    {this.props.children}
                </script>
            </div>
        )
    }
}

export default Typogram;
