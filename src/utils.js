import path from 'path';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

export default { getFullPath };
