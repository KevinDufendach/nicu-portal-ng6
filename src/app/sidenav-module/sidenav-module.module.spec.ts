import { SidenavModuleModule } from './sidenav-module.module';

describe('SidenavModuleModule', () => {
  let sidenavModuleModule: SidenavModuleModule;

  beforeEach(() => {
    sidenavModuleModule = new SidenavModuleModule();
  });

  it('should create an instance', () => {
    expect(sidenavModuleModule).toBeTruthy();
  });
});
