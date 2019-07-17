const puppeteer = require('puppeteer')

async function domElementScreenshot(params){

    try {

        //all params required
        const url                   = params.url
        const selector              = params.selector
        const launchOptions         = params.launchOptions || {headless: false }
        const setViewportOptions    = params.setViewportOptions || null
        const screenshotOptions     = params.screenshotOptions || { path: 'element.png' }
        const pageOptions           = params.pageOptions || { waitUntil: 'networkidle2' }

        if(selector){

            const browser               = await puppeteer.launch(launchOptions)
            const browserPages          = await browser.pages()
            const browserPage           = browserPages[0]
            
            if(setViewportOptions) await browserPage.setViewport(setViewportOptions)
            


            await browserPage.goto(url, pageOptions)
            await browserPage.waitFor(500)
            await browserPage.waitForSelector(selector)
            const element = await browserPage.$(selector)
            await element.screenshot(screenshotOptions)
            await browser.close()

            return true

        } else {
            throw new Error('Selector is required')
        }


    } catch(e){
        console.warn(e)
        return null

    }

    
}

module.exports = domElementScreenshot