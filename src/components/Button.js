/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Button extends React.Component {
    render() {
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                {locale === 'bn-BD' ? 'Change The Clock' : 'ঘড়ি পরিবর্তন করুন'}
            </button>
        );
    }
}

export default Button;
