import React, {Component} from 'react';
import WeatherCard from "./WeatherCard";

class WeatherBody extends Component {
    render() {
        const {wind_speed,humidity,pressure,feelslike} = this.props.data.current;
        return (
            <div className="weather-body">
                <WeatherCard
                iconClass="fas fa-wind text-info"
                title="Wind"
                data={wind_speed+' km/h'}
                />
                <WeatherCard
                iconClass="fas fa-tint text-primary"
                title="Humidity"
                data={humidity}
                />
                <WeatherCard
                iconClass="fas fa-tachometer-alt text-danger"
                title="Pressure"
                data={pressure}
                />
                <WeatherCard
                    iconClass="fas fa-temperature-low text-warning ml-2"
                    title="Feelslike"
                    data={feelslike+'º'}
                />

            </div>
        );
    }
}

export default WeatherBody;