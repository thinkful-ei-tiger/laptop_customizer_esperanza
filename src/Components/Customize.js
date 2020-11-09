import React from 'react';
import FEATURES from './STORE';
import Features from './Features';

class Customize extends React.Component {
    state = {
        features: FEATURES
    }

    render() {
        console.log(this.state.features)
        return (
            <form className="main__form">
              <h2>Customize your laptop</h2>
              <Features features={this.state.features}
               selected={this.props.selected}
               updateFeature={this.props.updateFeature}/>
            </form>
        )
    }
}

export default Customize;