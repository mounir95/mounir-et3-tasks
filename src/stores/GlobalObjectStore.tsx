import {observable, action, computed, makeObservable} from 'mobx';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import {TPrObject} from '../constant/constants';

class GlobalObjectStore {
  arrayofobjects: TPrObject[] = [];
  filteredarrayofobjects: TPrObject[] = [];
  isPickerShow: Boolean = false;
  date: Date = new Date(Date.now());
  emptyobject: TPrObject = {
    Myid: 0,
    Mydate: new Date(Date.now()).toUTCString(),
    Myselist: 'AH',
    Myplatform: 'mobile-client',
    Myreleaseversion: '',
    Mycomment: '',
    Myprlink: '',
    Mysize: 'Easy',
    Mydificulity: 'Easy',
    Mystatuslist: 'Has Comments',
    MyreviewedbyBY: 'no',
    MyreviewedbyAH: 'no',
    MyreviewedbyHT: 'no'
  };
  constructor() {
    makeObservable(this, {
      arrayofobjects: observable,
      filteredarrayofobjects: observable,
      emptyobject: observable,
      date: observable,
      isPickerShow: observable,
      addObjectArray: action,
      onDelete: action,
      setAllChanges: action,
      resetObject: action,
      setReveiwwedBy: action,
      setIsPickerShow: action,
      setDate: action,
      objectarrayCount: computed,
      objectLastElemet: computed
    });
  }

  addObjectArray = (lastarrayobject: TPrObject) => {
    this.arrayofobjects.push({...lastarrayobject});
  };

  onDelete = (objid: number) => {
    this.arrayofobjects = filter(this.arrayofobjects, (c: TPrObject) => {
      return c.Myid !== objid;
    });
  };

  setAllChanges = () => {
    this.arrayofobjects = filter(
      orderBy(this.arrayofobjects, (obj: TPrObject) => obj.Myid, ['asc']),
      (c: TPrObject) => {
        return c.hasOwnProperty('Myid');
      },
    );
  };

  resetObject = () => {
    this.emptyobject = {
      Myid: 0,
      Mydate: new Date(Date.now()).toUTCString(),
      Myselist: 'AH',
      Myplatform: 'mobile-client',
      Myreleaseversion: '',
      Mycomment: '',
      Myprlink: '',
      Mysize: 'Easy',
      Mydificulity: 'Easy',
      Mystatuslist: 'Has Comments',
      MyreviewedbyBY: 'no',
      MyreviewedbyAH: 'no',
      MyreviewedbyHT: 'no',
    };
  };

  setIsPickerShow = (booleanval: Boolean) => {
    this.isPickerShow = booleanval;
  };

  setDate = (dateval: Date) => {
    this.emptyobject.Mydate = dateval.toUTCString();
    this.date = dateval;
  };

  setReveiwwedBy = (
    booleanstring: React.ChangeEvent<HTMLInputElement>,
    attribute: string,
  ) => {
    if (attribute === 'reveiwed_by_BY') {
      this.emptyobject.MyreviewedbyBY = booleanstring.toString();
    } else if (attribute === 'reveiwed_by_AH') {
      this.emptyobject.MyreviewedbyAH = booleanstring.toString();
    } else if (attribute === 'reveiwed_by_HT') {
      this.emptyobject.MyreviewedbyHT = booleanstring.toString();
    }
  };

  get objectarrayCount() {
    return this.arrayofobjects.length;
  }

  get objectLastElemet() {
    return this.arrayofobjects[this.arrayofobjects.length];
  }
}
const globalObject = new GlobalObjectStore();
export default globalObject;
