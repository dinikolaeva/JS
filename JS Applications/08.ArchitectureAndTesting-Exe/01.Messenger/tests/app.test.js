const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const clientUrl = 'http://127.0.0.1:8080/01.Messenger/';

function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

let testMessages = {
    1: {
        author: 'Stamat',
        content: 'Hello, there!'
    },
    2: {
        author: 'Evgeni',
        content: 'Hello from me!'
    }
};

let browser;
let page;

describe('E2E tests', function() {

    before(async() => {
        browser = await chromium.launch({ headless: false, slowMo: 500 });
    });

    after(async() => {
        await browser.close();
    });

    beforeEach(async() => {
        page = await browser.newPage();
    });

    afterEach(async() => {
        await page.close();
    });

    describe('load messages', () => {

        it('call server correct', async() => {

            await page.route('**/jsonstore/messenger', route => route
                .fulfill(fakeResponse(testMessages)));

            await page.goto(clientUrl);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);

            let result = await response.json();
            expect(result).to.eql(testMessages);
        });

        it('show data in text area', async() => {

            await page.route('**/jsonstore/messenger', route => route
                .fulfill(fakeResponse(testMessages)));

            await page.goto(clientUrl);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);

            let textArea = await page.$eval('#messages', (textArea) => textArea.value);

            let expectText = Object.values(testMessages)
                .map(t => `${t.author}: ${t.content}`)
                .join('\n');

            expect(textArea).to.eql(expectText);
        });
    })
});