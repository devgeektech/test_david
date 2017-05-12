var config = {
    "development": {
        "webServer": {
            "url": "http://localhost/",
            "port": 3000
        }
    },
    "production": {
        "webServer": {
            "url": "http://test.com/",
            "port": 80
        }
    }
};
var node_env = 'development';

module.exports = config[node_env];