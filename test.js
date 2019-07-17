const domElementScreenshot = require('./index.js');


(async () => {
  
    const response = await domElementScreenshot({
        url: 'https://www.binance.com/en/trade/pro/BTC_USDT',
        selector: '#__next div.chartContainer',
        launchOptions: { headless: false, defaultViewport: {  width: 1200, height: 575 } },
    })
  
})()