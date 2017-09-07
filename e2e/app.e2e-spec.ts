import { Ng2NouisliderPage } from './app.po';

describe('ng2-nouislider App', () => {
  let page: Ng2NouisliderPage;

  beforeEach(() => {
    page = new Ng2NouisliderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
