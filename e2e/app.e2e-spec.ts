import { MyChatPage } from './app.po';

describe('my-chat App', function() {
  let page: MyChatPage;

  beforeEach(() => {
    page = new MyChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
});
});
