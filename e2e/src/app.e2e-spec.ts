import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('Acts like a user that clicks every route button', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display button text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Log In');
  });
  it('should click the button and route to dashboard', () => {
    page.navigateTo();
    browser.pause();
    page.clickSidenavIcon().click();
    browser.pause();
    page.clickSidenavDashboard().click();
    browser.pause();
  });
  it('should click the button and route to Journey Map', () => {
    page.navigateTo();
    browser.pause();
    page.clickSidenavIcon().click();
    browser.pause();
    page.clickSidenavJourneyMap().click();
    browser.pause();
  });
  it('should click the button and route to My Learning', () => {
    page.navigateTo();
    browser.pause();
    page.clickSidenavIcon().click();
    browser.pause();
    page.clickSidenavMyLearning().click();
    browser.pause();
  });
  it('should click the button and route to Our Team', () => {
    page.navigateTo();
    browser.pause();
    page.clickSidenavIcon().click();
    browser.pause();
    page.clickSidenavOurTeam().click();
    browser.pause();
  });
  it('should click the button and route to NicView', () => {
    page.navigateTo();
    browser.pause();
    page.clickSidenavIcon().click();
    browser.pause();
    page.clickSidenavNICView().click();
    browser.pause();
  });
});
