import {computed, observable, runInAction} from 'mobx';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import {TPrObject, TSQLObject} from '../interfaces/interfaces';
import {memoize} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

class GlobalObjectStore {
  arrayofobjects = observable.box<TSQLObject[]>([]);
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
        if (c.id === objid){
          fetch('http://192.168.42.231:3001/api/delete', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: objid,
            }),
          }).then(async res => await res.json());
          // .catch(error => console.error('Error:', error))
          // .then(async response => console.log('Success:', await response));
        }
      });
    });
    const jsonValue = JSON.stringify(this.arrayofobjects.get());
    await AsyncStorage.setItem('object', jsonValue);
  };

  orderingArrayOfObject = () => {
    runInAction(() => {
      this.arrayofobjects.set(
        orderBy(this.arrayofobjects.get(), (obj: TSQLObject) => obj.id, [
          'asc',
        ]),
      );
    });
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

  lastIndexToUse = computed(() => {
    if (
      this.arrayofobjects.get()[this.arrayofobjects.get().length - 1] ===
      undefined
    ) {
      return 1;
    } else {
      return (
        this.arrayofobjects.get()[this.arrayofobjects.get().length - 1].id + 1
      );
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
