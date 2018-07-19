import { StartModuleModule } from './start-module.module';

describe('StartModuleModule', () => {
  let startModuleModule: StartModuleModule;

  beforeEach(() => {
    startModuleModule = new StartModuleModule();
  });

  it('should create an instance', () => {
    expect(startModuleModule).toBeTruthy();
  });
});
