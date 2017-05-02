import { TotoMVCPage } from './app.po';

describe('toto-mvc App', () => {
  let page: TotoMVCPage;

  beforeEach(() => {
    page = new TotoMVCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
