import React, {Component} from 'react';
import moment from "moment";

class WeatherHeader extends Component {
    state = {
        date:moment().format('H:mm:ss')
    }

    componentDidMount() {
        this.setState({
            date:moment().format('H:mm:ss')
        })
    }

    render() {
        const data = this.props.data;
        return (
            <div className="weather-header">
                <div className="row no-gutters">
                    <div className="col-10">
                        <div className="row no-gutters">
                            <div className="col-12 text-faded-small">
                                {moment().format('dddd')}
                                <br/>
                                {data.current.weather_descriptions[0]}
                            </div>
                            <div className="col-12 mt-3"><img src={data.current.weather_icons[0]} alt=""/></div>
                            <div className="col-12 text-large">{data.current.temperature}º</div>
                        </div>
                    </div>
                    <div className="col-2 text-right">
                        <div className="row no-gutters">
                            <div className="col-12 brdr-bot bold-text text-center">
                                {data.location.name}
                            </div>

                            <div className="col-12 brdr-bot bold-text text-center">
                                {data.location.localtime.split(' ')[1]}
                                <br/>
                                {moment().format('A')}
                            </div>
                            <div className="col-12 bold-text text-center">
                                {moment().format('MMMM')}
                                <br/>
                                {moment().format('D')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherHeader;