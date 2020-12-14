#!/usr/bin/env node
import commander from 'commander';
import fs from 'fs';
import smevFilter from '../src/index.js';
import utils from '../src/utils.js';

const program = new commander.Command();

program
  .version('0.1.0')
  .description('Утилита для фильтрации ответов от смев')
  .option('-t, --time [time]', 'Время до которого нужно отфильтровать ответы')
  .option('-g, --guid [guid]', 'Уникальный идентификатор по которому нужно отфильтровать ответы')
  .option('-o, --output [output]', 'Файл куда сохранять результат')
  .option('-a, --answer [0-1]', 'Не отфильтровывать ответы с типом "Заявка принята". 0 - отфильтровывать', 0)
  .arguments('<filePath>')
  .action((filePath) => {
    const filterParams = {
      time: program.time,
      guid: program.guid,
      answer: program.answer,
    };
    const result = smevFilter(filePath, filterParams);

    fs.writeFileSync(utils.getFullPath(program.output), result, 'utf-8');
  });

program.parse(process.argv);
