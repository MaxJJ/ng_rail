import { RtmeDirectoriesModule } from './rtme-directories.module';

describe('RtmeDirectoriesModule', () => {
  let rtmeDirectoriesModule: RtmeDirectoriesModule;

  beforeEach(() => {
    rtmeDirectoriesModule = new RtmeDirectoriesModule();
  });

  it('should create an instance', () => {
    expect(rtmeDirectoriesModule).toBeTruthy();
  });
});
