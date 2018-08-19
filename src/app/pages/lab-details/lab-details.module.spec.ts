import { LabDetailsModule } from './lab-details.module';

describe('LabDetailsModule', () => {
  let labDetailsModule: LabDetailsModule;

  beforeEach(() => {
    labDetailsModule = new LabDetailsModule();
  });

  it('should create an instance', () => {
    expect(labDetailsModule).toBeTruthy();
  });
});
