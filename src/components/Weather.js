import React, {Component} from 'react';
import WeatherHeader from "./WeatherHeader";
import WeatherBody from "./WeatherBody";


class Weather extends Component {
    render() {
        return (
            <div>
                <WeatherHeader data={this.props.data}/>
                <WeatherBody data={this.props.data}/>
            </div>
        );
    }
}

export default Weather;