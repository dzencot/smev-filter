import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import smevFilter from '../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

let expectedData;

beforeAll(() => {
  expectedData = fs.readFileSync(getFixturePath('expected.xml'), 'utf-8');
});

describe('SmevFilter test', () => {
  test('test', () => { // eslint-disable-line
    const filter = {
      guild: '33d024a5-b385-4e89-9819-8d1bf44915c3',
      answer: 0,
    };
    expect(smevFilter(getFixturePath('expected.xml', filter).trim())).toEqual(expectedData.trim());
  });
});
