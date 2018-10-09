import TaskChangeUpdate from './TaskChangeUpdate';

describe('TaskChangeUpdate', () => {
  describe('parses', () => {
    const raw = '0ATC001000D7\r\n';
    let taskChangeUpdate: TaskChangeUpdate;

    beforeEach(() => {
      taskChangeUpdate = new TaskChangeUpdate(raw);
    });

    it('has the expected time values', () => {
      expect(taskChangeUpdate.taskNNumber).toBe(1);
    });
  });
});
