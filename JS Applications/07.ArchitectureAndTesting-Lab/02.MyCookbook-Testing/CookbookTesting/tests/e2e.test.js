//@ts-check
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const mockData = require('./mock-data.json');

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

let browser;
let context;
let page;

describe('E2E tests', function() {
    this.timeout(6000);

    before(async() => {
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
    });

    after(async() => {
        await browser.close();
    });

    beforeEach(async() => {
        context = await browser.newContext();

        // block intensive resources and external calls (page routes take precedence)
        await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await context.route(url => {
            return url.hostname != 'localhost';
        }, route => route.abort());

        page = await context.newPage();
    });

    afterEach(async() => {
        await page.close();
        await context.close();
    });

    describe('Catalog', () => {
        it('loads and displays recipes', async() => {
            await page.route('**/data/recipes*', (request) => request.fulfill(json(mockData.list)));

            await page.goto('http://localhost:3000');
            await page.waitForSelector('article');
            const titles = await page.$$eval('h2', titles => titles.map(t => t.textContent));
            expect(titles[0]).to.contains('Easy Lasagna');
            expect(titles[1]).to.contains('Grilled Duck Fillet');
            expect(titles[2]).to.contains('Roast Trout');
        });

        it('', async() => {

        });
    });

    describe('Authentication', () => {
        it('register sends correct request', async() => {
            await page.route('**/users/register*', (request) => request
                .fulfill(json({ _id: '00001', email, accessToken: 'DAAD' })));

            const email = 'john@abv.bg';
            const password = '123123';

            await page.goto('http://localhost:3000');
            await page.click('text=Register');
            await page.waitForSelector('form');
            await page.fill('[name="email"]', email);
            await page.fill('[name="password"]', password);
            await page.fill('[name="rePass"]', password);

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/users/register') &&
                    request.method() == 'POST'),
                page.click('[type="submit"]')
            ]);

            const postData = JSON.parse(request.postData());
            expect(postData.email).to.equal(email);
            expect(postData.password).to.equal(password);
        });

        it('login sends correct request', async() => {
            await page.route('**/users/login*', (request) => request
                .fulfill(json({ _id: '00001', email, accessToken: 'DAAD' })));

            const email = 'john@abv.bg';
            const password = '123123';

            await page.goto('http://localhost:3000');
            await page.click('text=Login');

            await page.waitForSelector('form');

            await page.fill('[name="email"]', email);
            await page.fill('[name="password"]', password);

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/users/login') &&
                    request.method() == 'POST'),
                page.click('[type="submit"]')
            ]);

            const postData = JSON.parse(request.postData());
            expect(postData.email).to.equal(email);
            expect(postData.password).to.equal(password);
        });
    });

    describe('CRUD operations', () => {

        beforeEach(async() => {
            await page.route('**/users/login*', route => route
                .fulfill(json({ _id: '00001', email, accessToken: 'DAAD' })));

            const email = 'john@abv.bg';
            const password = '123123';

            await page.goto('http://localhost:3000');
            await page.click('text=Login');

            await page.waitForSelector('form');

            await page.fill('[name="email"]', email);
            await page.fill('[name="password"]', password);

            await Promise.all([
                page.waitForResponse(response => response.url().includes('/users/login')),
                page.click('[type="submit"]')
            ]);
        });

        it.only('login user send correct create request', async() => {

            const data = {
                _id: 'someId',
                name: 'someName',
                img: 'someImg',
                ingredients: ['i1', 'i2', 'i3'],
                steps: ['step1', 'step2']
            }
            await page.route('**/data/recipes*', route => route.fulfill(json(data)));

            await page.click('text=Create Recipe');
            await page.waitForSelector('form');

            await page.fill('[name="name"]', data.name);
            await page.fill('[name="img"]', data.img);
            await page.fill('[name="ingredients"]', data.ingredients.join('\n'));
            await page.fill('[name="steps"]', data.steps.join('\n'));

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/data/recipes') &&
                    request.method() == 'POST'),
                page.click('[type="submit"]')
            ]);

            const requestData = JSON.parse(request.postData());
            expect(requestData.name).to.equal(data.name);
            expect(requestData.img).to.equal(data.img);
            expect(requestData.ingredients).to.deep.equal(data.ingredients);
            expect(requestData.steps).to.deep.equal(data.steps);
        });



    });
});