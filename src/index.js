import fs from 'fs';
import _ from 'lodash';

import parser from './parser.js';
import filter from './filter.js';
import utils from './utils.js';

const getData = (filepath) => fs.readFileSync(filepath, 'utf-8');

export default (filePath, filterParams = { answer: 0 }) => {
  const data = getData(utils.getFullPath(filePath));

  const parsedData = parser.parseToJs(data);
  const samples = _.get(parsedData, 'testResults.sample', []);
  const filteredSamples = filter(samples, filterParams);
  _.set(parsedData, 'testResults.sample', filteredSamples);

  const result = parser.parseToXml(parsedData);
  return result;
};
