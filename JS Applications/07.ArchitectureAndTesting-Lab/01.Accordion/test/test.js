const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser;
let page;

describe('E2E tests', function() {
    this.timeout(6000);
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

    it('loads static page', async() => {
        await page.goto('http://localhost:3000');
        await page.screenshot({ path: 'index.png' });
    });

    it('check for correct content on page', async() => {
        await page.goto('http://localhost:3000');

        const content = await page.content();
        expect(content).to.contains('Scalable Vector Graphics');
        expect(content).to.contains('Open standard');
        expect(content).to.contains('Unix');
        expect(content).to.contains('ALGOL');
    });

    it('check for correct content when button more is clicked', async() => {
        await page.goto('http://localhost:3000');

        await page.click('text=More');
        const isVisible = await page.isVisible('.extra p');
        expect(isVisible).to.be.true;
    });

    it('check for correct content when button more is clicked', async() => {
        await page.goto('http://localhost:3000');

        await page.click('text=More');
        const isVisible = await page.isVisible('.extra p');
        expect(isVisible).to.be.true;
    });

    it('check for hiding content when button less is clicked', async() => {
        await page.goto('http://localhost:3000');

        await page.click('text=More');
        await page.click('text=Less');
        const isVisible = await page.isVisible('.extra p');
        expect(isVisible).to.be.false;
    });
});