import { CMSFDPage } from './app.po';

describe('cmsfd App', () => {
  let page: CMSFDPage;

  beforeEach(() => {
    page = new CMSFDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
