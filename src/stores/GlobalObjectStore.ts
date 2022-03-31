import {computed, observable, runInAction} from 'mobx';
import filter from 'lodash/filter';
import {TPrObject, TSQLObject} from '../interfaces/interfaces';
import {memoize} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getSqlQueryStore from './SqlQuery';

class GlobalObjectStore {
  arrayofobjects = observable.box<TSQLObject[]>([]);
  lastindex = observable.box<number>();
  filteredarrayofobjects = observable.box<TSQLObject[]>([]);
  ShowPopUp = observable.box<boolean>(false);
  isPickerShow = observable.box<Boolean>(false);
  date = observable.box<Date>(new Date(Date.now()));
  emptyobject = observable.box<TPrObject>({
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
  });

  deletObjectWithId = async (objid: number) => {
    runInAction(() => {
      filter(this.arrayofobjects.get(), (c: TSQLObject) => {
        if (c.id === objid) {
          getSqlQueryStore().sqlDelete(objid);
        }
      });
    });
    const jsonValue = JSON.stringify(this.arrayofobjects.get());
    await AsyncStorage.setItem('object', jsonValue);
  };

  clearemptyObject = () => {
    runInAction(() => {
      this.emptyobject.set({
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
      });
    });
  };

  inputIsPickerShow = (boolval: Boolean) => {
    runInAction(() => {
      this.isPickerShow.set(boolval);
    });
  };

  ShowPopUpFun = (boolval: boolean) => {
    runInAction(() => {
      this.ShowPopUp.set(boolval);
    });
  };


  inputDate = (dateval: Date) => {
    runInAction(() => {
      this.emptyobject.get().Mydate = dateval.toUTCString();
      this.date.set(dateval);
    });
  };

  lastIndexpopUp = computed(() => {
    if (this.arrayofobjects.get().length >= 1) {
      return this.arrayofobjects.get().length;
    } else {
      return 0;
    }
  });

}

const getGlobalObjectStore = memoize(
  () => {
    const globalObject = new GlobalObjectStore();
    return globalObject;
  },
  () => 1,
);

export default getGlobalObjectStore;
