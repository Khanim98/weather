import React, {Component} from 'react';

class WeatherCard extends Component {
    render() {
        const {iconClass,title,data} = this.props;
        return (
            <div className="weather-card">
                <div><i className={iconClass}/></div>
                <div className={"weather-parameters"}>{title}</div>
                <div className="text-faded-small">{data}</div>
            </div>
        );
    }
}

export default WeatherCard;