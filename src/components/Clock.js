/* eslint-disable react/no-unknown-property */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <div id="button1">
                    {locale === 'bn-BD' ? (
                        <Button type="button" change={this.handleClick} locale="en-US">
                            Click here
                        </Button>
                    ) : (
                        <Button type="button" change={this.handleClick} locale="bn-BD">
                            Click here
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default Clock;
