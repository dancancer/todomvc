const isNative = () => {
  // const {Platform} = require('react-native').default;
  // return !!Platform;
  return false
};


const isDev = () => {
  // if (isNative()) {
  //   return __DEV__;
  // }

  return process.env.NODE_ENV !== 'production';
};


export {
  isDev,
  isNative
};