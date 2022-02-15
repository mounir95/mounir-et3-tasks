import React from 'react';
import {Context} from 'vm';

export let zero = 0;
export const days = [
  {name: 'Date'},
  {name: 'SE_List'},
  {name: '#'},
  {name: 'Platform'},
  {name: 'Release Version'},
  {name: 'Comment'},
  {name: 'PR_Link'},
  {name: 'Size'},
  {name: 'Difiiculity'},
  {name: 'Status List'},
  {name: 'Reveiwed By BY'},
  {name: 'Reveiwed By AH'},
  {name: 'Reveiwed By HT'},
  {name: ''},
  {name: ''}
];

export const arrayofsort = ['asc', 'desc'];

export const booleanval = [
  {
    key: 'yes',
    text: 'yes'
  },
  {
    key: 'no',
    text: 'no'
  }
];

export const dayss = [
  {name: 'Dassssssste'},
  {name: 'SE_List'},
  {name: '#'},
  {name: 'Platform'},
  {name: 'Release Version'},
  {name: 'Comment'},
  {name: 'PR_Link'},
  {name: 'Size'},
  {name: 'Difiiculity'},
  {name: 'Status List'},
  {name: 'Reveiwed By BY'},
  {name: 'Reveiwed By AH'},
  {name: 'Reveiwed By HT'}
];

export interface TPrObject {
  Date: Date;
  SE_list: string[];
  Platform: string[];
  Release_Version: string;
  Comment: string;
  Pr_Link: string;
  Size: string[];
  Dificulity: string[];
  Status_list: string[];
  Reveiwed_by_BY: string;
  Reveiwed_by_AH: string;
  Reveiwed_by_HT: string
}

const globalState: Partial<TPrObject> = {
  Date: new Date(),
  SE_list: ['AH', 'BY', 'HT'],
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
    'fa-website'
  ],
  Release_Version: '8.0.1',
  Comment: 'Commit Text',
  Pr_Link: 'https://github.com/et3/anylink',
  Size: ['Easy', 'Medium', 'Hard'],
  Dificulity: ['Easy', 'Medium', 'Hard'],
  Status_list: ['Has Comments', 'Merged', 'Needs Reveiw', 'Closed'],
  Reveiwed_by_BY: 'no',
  Reveiwed_by_AH: 'no',
  Reveiwed_by_HT: 'no'
};

export const globalStateContext: Context =
  React.createContext<Partial<TPrObject>>(globalState);
