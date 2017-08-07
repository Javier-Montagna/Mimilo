import { MimiloPage } from './app.po';

describe('mimilo App', () => {
  let page: MimiloPage;

  beforeEach(() => {
    page = new MimiloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
