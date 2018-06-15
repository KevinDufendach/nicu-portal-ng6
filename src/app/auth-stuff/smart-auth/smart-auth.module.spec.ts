import { SmartAuthModule } from './smart-auth.module';

describe('SmartAuthModule', () => {
  let smartAuthModule: SmartAuthModule;

  beforeEach(() => {
    smartAuthModule = new SmartAuthModule();
  });

  it('should create an instance', () => {
    expect(smartAuthModule).toBeTruthy();
  });
});
