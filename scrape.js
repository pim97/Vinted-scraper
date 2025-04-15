const Scrappey = require('scrappey-wrapper');

/**
 * Check out our documentation here for more information: https://wiki.scrappey.com/
 * Your key can be found here: https://app.scrappey.com/#/
 */
const SCRAPPEY_API_KEY = 'API_KEY';
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

/**
 * Scrappey.com is a proxy-wrapper for browsers, it allows you to run browser actions and execute javascript on any website.
 * with advanced options such as caching, proxy rotation, anti-bot and more.
 */
async function run() {

    /**
     * Executes the browser actions requested
     */
    const get = await scrappey.get({
        "cmd": "request.get",
        "url": "https://www.vinted.co.uk/catalog?search_id=22412703813&time=1744394390&catalog[]=3002&order=newest_first&disabled_personalization=true&catalog_from=0&page=1",
        "interceptFetchRequest": "https://www.vinted.co.uk/api/v2/catalog/items?page=1&per_page=96&time=1744394390&search_text=&catalog_ids=3002&order=newest_first&catalog_from=0&brand_ids=&status_ids=&color_ids=&video_game_platform_ids=",
        "proxyCountry": "UnitedKingdom",
        "filter": ["response"],
        "premiumProxy": true,
        "whitelistedDomains": [""]
    })

    console.log(JSON.stringify(get, undefined, 4))
    
}

run().catch(console.error);
