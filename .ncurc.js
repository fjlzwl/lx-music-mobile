module.exports = {
  upgrade: true,
  reject: [
    // 'metro-react-native-babel-preset',
    '@types/react-native',
    'metro-react-native-babel-preset',
    '@react-native/metro-config',
    'react',
  ],

  // target: 'patch',
  // filter: [
  //   '@types/react-native',
  //   'react',
  //   'metro-react-native-babel-preset',
  //   '@react-native/metro-config',
  // ],
}
