import { KupdomPage } from './app.po';

describe('kupdom App', function() {
  let page: KupdomPage;

  beforeEach(() => {
    page = new KupdomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
