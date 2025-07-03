import cliConfiguration from '../yargs-example';

describe('yargs example', () => {
  describe('logFile', () => {
    afterEach(() => {
      delete process.env.MYAPP_LOG_FILE;
    });

    it('should use default log file when not passed', () => {
      const config = cliConfiguration();

      expect(config.logFile).equal('./app.log');
    });

    it('should use the passed param log file', () => {
      const config = cliConfiguration(['--logFile', './custom.log']);

      expect(config.logFile).equal('./custom.log');
    });

    it('should use the passed param log file as alias', () => {
      const config = cliConfiguration(['-l', './custom.log']);

      expect(config.logFile).equal('./custom.log');
    });

    it('should use the env var log file', () => {
      process.env.MYAPP_LOG_FILE = './env-custom.log';

      const config = cliConfiguration();

      expect(config.logFile).equal('./env-custom.log');
    });

    it('should use the passed param log file over the env var', () => {
      process.env.MYAPP_LOG_FILE = './env-custom-2.log';

      const config = cliConfiguration(['--logFile', './param-custom.log']);

      expect(config.logFile).equal('./param-custom.log');
    });
  });

  describe('verbose', () => {
    afterEach(() => {
      delete process.env.MYAPP_VERBOSE;
    });

    it('should set verbose to `false` when not passed', () => {
      const config = cliConfiguration();

      expect(config.verbose).equal(false);
    });

    it('should set verbose to `false` when `false` passed', () => {
      const config = cliConfiguration(['--verbose', 'false']);

      expect(config.verbose).equals(false);
    });

    it('should set verbose to `true` when `true` passed', () => {
      const config = cliConfiguration(['--verbose', 'true']);

      expect(config.verbose).equals(true);
    });

    it('should set verbose to `false` when `false` passed as alias', () => {
      const config = cliConfiguration(['-v', 'false']);

      expect(config.verbose).equals(false);
    });

    it('should set verbose to `true` when `true` passed as alias', () => {
      const config = cliConfiguration(['-v', 'true']);

      expect(config.verbose).equals(true);
    });

    it('should use the env var', () => {
      process.env.MYAPP_VERBOSE = 'true';

      const config = cliConfiguration();

      expect(config.verbose).equal(true);
    });

    it('should use the passed param over the env var', () => {
      process.env.MYAPP_VERBOSE = 'true';

      const config = cliConfiguration(['--verbose', 'false']);

      expect(config.verbose).equal(false);
    });
  });
});
