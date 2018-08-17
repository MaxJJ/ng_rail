import { RtmeOrderModule } from './rtme-order.module';

describe('RtmeOrderModule', () => {
  let rtmeOrderModule: RtmeOrderModule;

  beforeEach(() => {
    rtmeOrderModule = new RtmeOrderModule();
  });

  it('should create an instance', () => {
    expect(rtmeOrderModule).toBeTruthy();
  });
});
