import _ from 'lodash';
import converter from 'xml-js';

const parseOption = { compact: true };

const formatToJs = (value = '') => {
  const result = value
    .replace(/\?+=&quot.*?&quot;/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');

  return result;
};

const parseToJs = (data) => {
  const formattedData = formatToJs(data);
  const jsonData = converter.xml2js(formattedData, parseOption);

  return jsonData;
};

const parseToXml = (data) => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>';
  const result = converter.js2xml(data, {...parseOption, ignoreDeclaration: true });
  result
    .replace(/testresults/g, 'testResults')
    .replace(/requestheader/g, 'requestHeader')
    .replace(/requestheader/g, 'requestHeader')
  return `${header}${result}`;
};

export default { parseToJs, parseToXml };
