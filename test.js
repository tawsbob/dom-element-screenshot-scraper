const domElementScreenshot = require('./index.js')

;(async () => {   

    /*const _response = await domElementScreenshot({
        url: 'https://www.google.com/',
        selector: '#hplogo',
        launchOptions: { headless: true, defaultViewport: { width: 1200, height: 575 } },
      })*/

  const response = await domElementScreenshot({
    url: 'https://www.binance.com/en/trade/pro/BTC_USDT',
    selector: 'div.chartContainer',
    launchOptions: { headless: false, defaultViewport: { width: 1500, height: 1500 } },
  })
})()
