import counterInit from 'modules/counter/counterInit';

export default (first, second) => ({
  first: counterInit(first),
  second: counterInit(second),
})
