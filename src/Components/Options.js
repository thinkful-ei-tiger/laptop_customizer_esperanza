import React from 'react';
import slugify from 'slugify';
import USCurrency from './USCurrency';



class Options extends React.Component {

    render() {
        const { itemHash, name,
            updateFeature, selected,
            featureOption, cost, item } = this.props;
        return (
            <div key={itemHash}
                className="feature__item">
                <input
                    type="radio"
                    id={slugify(name)}
                    className="feature__option"
                    name={slugify(name)}
                    onChange={() => updateFeature(featureOption, item)}
                    checked={name === selected[featureOption]['name']}
                />
                <label htmlFor={slugify(name)} className="feature__label">
                    {name} ({USCurrency.format(cost)})
                </label>
            </div>
        );
    }
}

export default Options;