import _ from 'lodash';

const filter = (parsedData, filterParams) => {
  console.log(filterParams);
  const filteredData = parsedData.filter(({ responseData, _attributes }) => {
    if (!responseData) {
      return false;
    }

    const taskInfo = _.get(responseData, 'ns2:TaskStatus.ns2:TaskStatusInfo', null);
    if (!taskInfo) {
      return false;
    }

    const isFinal = _.get(taskInfo, 'ns2:StatusIsFinal._text', taskInfo['ns2:StatusIsFinal']);
    if (filterParams.answer === 0 && isFinal !== 'true') {
      return false;
    }

    const taskId = _.get(taskInfo, 'ns2:TaskId._text', taskInfo['ns:TaskId']);
    if (filterParams.guid && taskId !== filterParams.guid) {
      return false;
    }

    if (filterParams.time) {
      const optionTime = new Date(filterParams);
      const taskTime = new Date(parseInt(_attributes.ts, 10));
      console.log(taskTime.getTime());
      return taskTime.getTime() <= optionTime.getTime();
    }
    return true;
  });

  return filteredData;
};

export default filter;
