import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export type CliConfiguration = {
  logFile: string;
};

export default function cliConfiguration(options?: string[]): CliConfiguration {
  const argv = options ?? hideBin(process.argv);

  return yargs(argv)
    .env('MYAPP') // Use environment variables prefixed with MYAPP_
    .option('logFile', {
      // Env var: MYAPP_LOG_FILE
      alias: 'l',
      type: 'string',
      description: 'Path to the log file',
      default: './app.log',
    })
    .help()
    .parseSync();
}
