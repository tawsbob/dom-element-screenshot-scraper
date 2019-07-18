# dom-element-screenshot-scraper

**Module** that use[ puppeteer](https://github.com/GoogleChrome/puppeteer " puppeteer") to save a screenshot of html element on screen.

## Installation

```javascript
npm install dom-element-screenshot-scraper
```

## Usage

        
    const domElementScreenshot = require('dom-element-screenshot-scraper')
    
    ;(async () => {
      const _response = await domElementScreenshot({
            url: 'https://www.google.com/',
            selector: '#hplogo',
            launchOptions: { headless: true, defaultViewport: { width: 1200, height: 575 } },
			screenshotOptions: {
				path: 'my-file-name.png'
			}
          })
    
    })()
    

##  Method domElementScreenshot ( options )

Promise => domElementScreenshot()

### Options
options.url => Page url
options. selector => CSS selector ('#my-id .my-class-element')


