import {Dimensions} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

import {globalObject, TBoolval} from '../interfaces/interfaces';

export const booleanval: [TBoolval, TBoolval] = [
  {
    key: 'yes',
    text: 'yes',
  },
  {
    key: 'no',
    text: 'no',
  },
];
export const globalStateObject: globalObject = {
  Date: new Date(),
  SEList: ['AH', 'BY', 'HT'],
  Platform: [
    'mobile-client',
    'kh-server-node',
    'kh-sqs-worker',
    'kh-server-firebase',
    'kh-admin-client',
    'kh-admin-server-new',
    'kh-admin',
    'fa-mobile-client',
    'fa-server-firebase',
    'kh-website',
    'fa-website',
  ],
  ReleaseVersion: '8.0.1',
  Comment: 'Commit Text',
  PrLink: 'https://github.com/et3/anylink',
  Size: ['Easy', 'Medium', 'Hard'],
  Dificulity: ['Easy', 'Medium', 'Hard'],
  StatusList: ['Has Comments', 'Merged', 'Needs Reveiw', 'Closed'],
  ReveiwedByBY: 'no',
  ReveiwedByAH: 'no',
  ReveiwedByHT: 'no',
};
