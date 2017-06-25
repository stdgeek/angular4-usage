import { Angular4UsagePage } from './app.po';

describe('angular4-usage App', () => {
  let page: Angular4UsagePage;

  beforeEach(() => {
    page = new Angular4UsagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
