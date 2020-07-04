let config = {
    apiKey:'d321d3df72426d3f1d5c9a242a05c59d',
    currentApi:{
        url: `http://api.weatherstack.com/current?access_key=d321d3df72426d3f1d5c9a242a05c59d`,
        getUrl: query => `${config.currentApi.url}&query=${query}`
    },

};


export default config;
