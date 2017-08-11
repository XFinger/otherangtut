import { ImclausAngularPage } from './app.po';

describe('imclaus-angular App', () => {
  let page: ImclausAngularPage;

  beforeEach(() => {
    page = new ImclausAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
