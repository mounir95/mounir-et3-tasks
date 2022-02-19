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
  Myid: number;
  Mydate: Date;
  Myselist: string[];
  Myplatform: string[];
  Myreleaseversion: string;
  Mycomment: string;
  Myprlink: string;
  Mysize: string[];
  Mydificulity: string[];
  Mystatuslist: string[];
  MyreviewedbyBY: string;
  MyreviewedbyAH: string;
  MyreviewedbyHT: string
}

export interface TGlobalObject {
  Date: Date;
  SEList: string[];
  Platform: string[];
  ReleaseVersion: string;
  Comment: string;
  PrLink: string;
  Size: string[];
  Dificulity: string[];
  StatusList: string[];
  ReveiwedByBY: string;
  ReveiwedByAH: string;
  ReveiwedByHT: string
}

const globalState: Partial<TGlobalObject> = {
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
    'fa-website'
  ],
  ReleaseVersion: '8.0.1',
  Comment: 'Commit Text',
  PrLink: 'https://github.com/et3/anylink',
  Size: ['Easy', 'Medium', 'Hard'],
  Dificulity: ['Easy', 'Medium', 'Hard'],
  StatusList: ['Has Comments', 'Merged', 'Needs Reveiw', 'Closed'],
  ReveiwedByBY: 'no',
  ReveiwedByAH: 'no',
  ReveiwedByHT: 'no'
};

export const globalStateContext: Context =
  React.createContext<Partial<TGlobalObject>>(globalState);
