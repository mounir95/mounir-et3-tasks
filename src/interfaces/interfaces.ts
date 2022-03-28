import {IObservableValue} from 'mobx';

export interface TBoolval {
  key: string;
  text: string;
}

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

export interface TSQLObject {
  id: number;
  date: string;
  selist: string;
  platform: string;
  releaseVerion: string;
  comment: string;
  prlink: string;
  size: string;
  difficulity: string;
  statuslist: string;
  reveiwedbyby: string;
  reveiwedbyah: string;
  reveiwedbyht: string;
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

export const setObjectArrayFun = (object: TSQLObject) => {
  return [
    object.date,
    object.selist,
    object.id,
    object.platform,
    object.releaseVerion,
    object.comment,
    object.prlink,
    object.size,
    object.difficulity,
    object.statuslist,
    object.reveiwedbyby,
    object.reveiwedbyah,
    object.reveiwedbyht,
  ];
};

export interface TTrans {
  language: IObservableValue<string>;
  LG: {
    translation: {AR: string; ENG: string};
    addpage: {AR: string; ENG: string};
    excel: {AR: string; ENG: string};
    excelpage: {AR: string; ENG: string};
    arlang: {AR: string; ENG: string};
    enlang: {AR: string; ENG: string};
    addtext: {AR: string; ENG: string};
    closetext: {AR: string; ENG: string};
    donetext: {AR: string; ENG: string};
    nexttext: {AR: string; ENG: string};
    platformtext: {AR: string; ENG: string};
    setext: {AR: string; ENG: string};
    dificulitytext: {AR: string; ENG: string};
    sizetext: {AR: string; ENG: string};
    statustext: {AR: string; ENG: string};
    prcount: {AR: string; ENG: string};
    checktable: {AR: string; ENG: string};
    sortbydate: {AR: string; ENG: string};
    searchbycomment: {AR: string; ENG: string};
    searchbystatus: {AR: string; ENG: string};
    searchbyse: {AR: string; ENG: string};
    searchbyplatform: {AR: string; ENG: string};
    showpicker: {AR: string; ENG: string};
    byapprove: {AR: string; ENG: string};
    ahapprove: {AR: string; ENG: string};
    htapprove: {AR: string; ENG: string};
    pleaseselect: {AR: string; ENG: string};
    required: {AR: string; ENG: string};
    releaseversion: {AR: string; ENG: string};
    comment: {AR: string; ENG: string};
    prlink: {AR: string; ENG: string};
    asc: {AR: string; ENG: string};
    desc: {AR: string; ENG: string};
    arrayofsort: {AR: [string, string]; ENG: [string, string]};
    excelcol: {AR: object[]; ENG: object[]};
    textinlang: {AR: string; ENG: string};
  };
  setLanguage(language: string): void;
  get(message: string): string;
  getArray(array: string): string[];
  getObjArray(array: string): [{name: string}];
  setrunInAction(objectval: IObservableValue<string>, message: string): void;
}
