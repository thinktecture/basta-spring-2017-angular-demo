import { BastaDemoPage } from './app.po';

describe('basta-demo App', () => {
  let page: BastaDemoPage;

  beforeEach(() => {
    page = new BastaDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
