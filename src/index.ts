import core from '@actions/core';
import alliser from 'alliser';

const parseCommaSeparated = (input: string): string[] => input.split(',');

try {
  const extensions = parseCommaSeparated(core.getInput('extensions'));
  const folders = parseCommaSeparated(core.getInput('folders'));

  alliser.validate(extensions, folders);
} catch (error) {
  core.setFailed(error.message);
}
