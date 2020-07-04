import React, {Component} from 'react'
import config from "../config";

import '../css/style.scss';
import Weather from "./Weather";
import Loading from './9.gif';

class App extends Component{

    state = {
        query:'Baku',
        weatherData:{},
        isLoading:true
    }

    componentDidMount() {
        this.getData();
    }


    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            this.search();
        }
    }

    search = () => {
        this.setState({isLoading:true});
        this.getData();
    }

    getData(){
        this.setState({isLoading:true});
        fetch(config.currentApi.getUrl(this.state.query))
            .then(data => data.json())
            .then(data => this.setState({
                    weatherData:data,
                    isLoading:false
                })
            );
    }


    render() {
        return (
            <div className="main">
                <div className="input-group mb-1 mt-3">
                    <input
                        onChange={(e) => this.setState({query:e.target.value})}
                        value={this.state.query}
                        className="form-control"
                        onKeyDown={this.onKeyDown}
                        placeholder="Username"/>
                    <div className="input-group-append">
                        <span onClick={this.search} className="input-group-text fas fa-search btn btn-info" style={{cursor:'pointer'}}>
                        </span>
                    </div>
                </div>
                <div className="weather-area">
                  {this.state.isLoading? <div className={"loader"}><img src={Loading}/></div>:
                    <Weather data={this.state.weatherData}/>
                  }
                </div>
            </div>
        );
    }
}

export default App;
