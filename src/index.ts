import core from '@actions/core';
import github from '@actions/github'; // eslint-disable-line no-unused-vars
import alliser from 'alliser';

const parseCommaSeparated = (input: string): string[] => input.split(',');

try {
  const extensions = parseCommaSeparated(core.getInput('extensions'));
  const folders = parseCommaSeparated(core.getInput('folders'));

  alliser.validate(extensions, folders);
} catch (error) {
  console.log(error.message);
  core.setFailed(error.message);
}
