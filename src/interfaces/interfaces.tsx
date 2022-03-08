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

export interface TTrans {
  language: IObservableValue<string>;
  LG: {
    addpage: {AR: string; ENG: string};
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
  };
  setLanguage(language: string): void;
  get(message: string): any;
}
