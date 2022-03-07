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

export interface TLanguageObj {
  addpage: string;
  excelpage: string;
  arlang: string;
  enlang: string;
  addtext: string;
  closetext: string;
  donetext: string;
  nexttext: string;
  platformtext: string;
  setext: string;
  dificulitytext: string;
  sizetext: string;
  statustext: string;
  prcount: string;
  checktable: string;
  sortbydate: string;
  searchbycomment: string;
  searchbystatus: string;
  searchbyse: string;
  searchbyplatform: string;
  showpicker: string;
  byapprove: string;
  ahapprove: string;
  htapprove: string;
  pleaseselect: string;
  required: string;
  releaseversion: string;
  comment: string;
  prlink: string;
  desc: string;
  asc: string;
  arrayofsort: string[];
  booleanval: {key: string; text: string}[];
  excelcol: {name: string}[];
  globalStateObject: Partial<globalObject>;
}
