import TaskActivation from './TaskActivation';

describe('TaskActivation', () => {
  let taskActivation: TaskActivation;

  beforeEach(() => {
    taskActivation = new TaskActivation(1);
  });

  it('generates the expected raw message', () => {
    expect(taskActivation.raw).toBe('09tn00100C4\r\n');
  });
});
