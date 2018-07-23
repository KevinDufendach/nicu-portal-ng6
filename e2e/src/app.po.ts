import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-start button')).getText();
  }
  clickSidenavIcon() {
    return element(by.css('[type=button]'));
  }
  clickSidenavDashboard() {
    return element(by.css('[routerlink="dashboard"]'));
  }
  clickSidenavJourneyMap() {
    return element(by.css('[routerlink="journeymap"]'));
  }
  clickSidenavMyLearning() {
    return element(by.css('[routerlink="learning"]'));
  }
  clickSidenavOurTeam() {
    return element(by.css('[routerlink="careteam"]'));
  }
  clickSidenavNICView() {
    return element(by.css('[routerlink="nicview"]'));
  }
}
