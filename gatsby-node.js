var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

exports.modifyWebpackConfig = function(config, env) {
   
    config.plugin('browser-sync',
                  BrowserSyncPlugin,
                  [{
                  	host: 'localhost',
				    port: 3000,
				    proxy: 'http://0.0.0.0:8000'
                  },{
              		reload: false
                  }]);

    return config
};