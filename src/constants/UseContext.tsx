import {observable, action, makeObservable} from 'mobx';
import globalObj from './ObjectStore';

class AddPageStore {
  addbuttontrue: Boolean = true;
  inputform: Boolean = false;
  addtext: string = 'ADD';
  constructor() {
    makeObservable(this, {
      addbuttontrue: observable,
      inputform: observable,
      addtext: observable,
      setAddPageMobx: action,
      resetAddPageMobx: action,
    });
  }
  setAddPageMobx = () => {
    this.addbuttontrue = true;
    this.inputform = false;
    this.addtext = 'ADD';
  };
  resetAddPageMobx = () => {
    this.addbuttontrue = false;
    this.inputform = true;
    this.addtext = 'Close';
  };
}
export const AddPageMobx = new AddPageStore();

class FilterStore {
  platform: Boolean = true;
  se: Boolean = true;
  status: Boolean = true;
  comment: Boolean = true;
  date: Date = new Date(Date.now());
  constructor() {
    makeObservable(this, {
      platform: observable,
      se: observable,
      status: observable,
      comment: observable,
      changefilter: action,
    });
  }
  changefilter = (pl: Boolean, se: Boolean, st: Boolean, cm: Boolean) => {
    this.platform = pl;
    this.se = se;
    this.status = st;
    this.comment = cm;
  };
}
export const FilterMobx = new FilterStore();

class SortFilterStore {
  date: Boolean = true;
  id: Boolean = true;
  constructor() {
    makeObservable(this, {
      date: observable,
      id: observable,
      setDateFun: action,
    });
  }
  setDateFun = () => {
    this.date = !this.date;
    this.id = !this.id;
  };
}
export const SortFilterMobx = new SortFilterStore();

class ExcelStore {
  id: number = -1;
  filterfalse: Boolean = false;
  updatefalse: Boolean = false;
  constructor() {
    makeObservable(this, {
      id: observable,
      filterfalse: observable,
      updatefalse: observable,
      resetStore: action,
      filterResetStore: action,
      onUpdateFun: action,
      filterPressFun: action,
    });
  }
  resetStore = () => {
    this.id = -1;
    this.updatefalse = false;
    this.filterfalse = false;
  };
  filterResetStore = () => {
    this.id = -1;
    this.updatefalse = false;
  };
  onUpdateFun = (objid: number) => {
    this.id = objid;
    this.updatefalse = true;
    this.filterfalse = false;
  };
  filterPressFun = () => {
    this.id = -1;
    this.updatefalse = false;
    this.filterfalse = !this.filterfalse;
  };
}
export const ExcelMobx = new ExcelStore();

class UpdateFormStore {
  selectpagetrue: Boolean = true;
  textpagetrue: Boolean = false;
  ssdliststrue: Boolean = false;
  radiobuttonstrue: Boolean = false;
  objectval: TPrObject = globalObj.emptyobject;
  constructor() {
    makeObservable(this, {
      selectpagetrue: observable,
      textpagetrue: observable,
      ssdliststrue: observable,
      radiobuttonstrue: observable,
      objectval: observable,
      selectList: action,
      ssdLists: action,
      textPage: action,
    });
  }
  selectList = () => {
    (this.selectpagetrue = false),
      (this.textpagetrue = true),
      (this.ssdliststrue = false),
      (this.radiobuttonstrue = false),
      (this.objectval = this.objectval);
  };
  ssdLists = () => {
    (this.selectpagetrue = false),
      (this.textpagetrue = false),
      (this.ssdliststrue = false),
      (this.radiobuttonstrue = true),
      (this.objectval = this.objectval);
  };
  textPage = () => {
    (this.selectpagetrue = false),
      (this.textpagetrue = false),
      (this.ssdliststrue = true),
      (this.radiobuttonstrue = false),
      (this.objectval = this.objectval);
  };
  radioButtons = () => {
    (this.selectpagetrue = true),
      (this.textpagetrue = false),
      (this.ssdliststrue = false),
      (this.radiobuttonstrue = false),
      (this.objectval = this.objectval);
  };
  resetStore = () => {
    (this.selectpagetrue = true),
      (this.textpagetrue = false),
      (this.ssdliststrue = false),
      (this.radiobuttonstrue = false),
      (this.objectval = globalObj.emptyobject);
  };
}
export const UpdateFormMobx = new UpdateFormStore();

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
  {name: ''},
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
  {name: 'Reveiwed By HT'},
];

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
  ReveiwedByHT: string;
}

export const globalStateObject: Partial<TGlobalObject> = {
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
