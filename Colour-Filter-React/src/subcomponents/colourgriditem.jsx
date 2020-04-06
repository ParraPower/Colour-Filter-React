import * as React from 'react';
import * as ReactDom from 'react-dom';

class ColourGridItem extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: props.model.name,
            hex: props.model.hex
        }
    }

    render() {
        return (
            <div className="colour-grid-item">
                <div style={{ backgroundColor: this.props.model.hex }} className="colour-grid-item-rect">
                </div>
                <div>
                    <div>{this.props.model.name}</div>
                    <div>{this.props.model.hex}</div>
                </div>
            </div>
        );
    }
}

export default ColourGridItem;