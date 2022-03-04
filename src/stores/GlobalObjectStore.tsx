import {computed, observable, runInAction} from 'mobx';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import {TPrObject} from '../constant/constants';
import {memoize} from 'lodash';

class GlobalObjectStore {
  arrayofobjects = observable.box<TPrObject[]>([]);
  filteredarrayofobjects = observable.box<TPrObject[]>([]);
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

  addObjectToArray = (lastarrayobject: TPrObject) => {
    runInAction(() => {
      this.arrayofobjects.get().push({...lastarrayobject});
    });
  };

  deletObjectWithId = (objid: number) => {
    runInAction(() => {
      this.arrayofobjects.set(
        filter(this.arrayofobjects.get(), (c: TPrObject) => {
          return c.Myid !== objid;
        }),
      );
    });
  };

  orderingArrayOfObject = () => {
    runInAction(() => {
      this.arrayofobjects.set(
        filter(
          orderBy(this.arrayofobjects.get(), (obj: TPrObject) => obj.Myid, [
            'asc',
          ]),
          (c: TPrObject) => {
            return c.hasOwnProperty('Myid');
          },
        ),
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

  inputIsPickerShow = (booleanval: Boolean) => {
    runInAction(() => {
      this.isPickerShow.set(booleanval);
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
        this.arrayofobjects.get()[this.arrayofobjects.get().length - 1].Myid + 1
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
