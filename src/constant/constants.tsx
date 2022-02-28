export interface TPrObject {
  Myid: number;
  Mydate: string;
  Myselist: string;
  Myplatform: string;
  Myreleaseversion: string;
  Mycomment: string;
  Myprlink: string;
  Mysize: string;
  Mydificulity: string;
  Mystatuslist: string;
  MyreviewedbyBY: string;
  MyreviewedbyAH: string;
  MyreviewedbyHT: string;
}

export interface globalObject {
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
  ReveiwedByHT: string;
}

export const globalStateObject: Partial<globalObject> = {
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
  {name: ''},
];

export const dayss = [
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
];

export const arrayofsort = ['asc', 'desc'];

export const booleanval = [
  {
    key: 'yes',
    text: 'yes',
  },
  {
    key: 'no',
    text: 'no',
  },
];

export const setObjectArrayFun = (object: TPrObject) => {
  return [
    object.Mydate,
    object.Myselist,
    object.Myid,
    object.Myplatform,
    object.Myreleaseversion,
    object.Mycomment,
    object.Myprlink,
    object.Mysize,
    object.Mydificulity,
    object.Mystatuslist,
    object.MyreviewedbyBY,
    object.MyreviewedbyAH,
    object.MyreviewedbyHT,
  ];
};
