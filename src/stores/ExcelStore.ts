import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TSQLObject} from '../interfaces/interfaces';
import getGlobalObjectStore from './GlobalObjectStore';
import getLanguageStore from './LanguageStore';
import orderBy from 'lodash/orderBy';

class ExcelStore {
  id = observable.box<number>(-1);
  sqlobject = observable.box<Promise<void>>(null);
  filterfalse = observable.box<Boolean>(false);
  updatefalse = observable.box<Boolean>(false);
  resetStore = () => {
    runInAction(() => {
      this.id.set(0);
      this.updatefalse.set(false);
      this.filterfalse.set(false);
    });
  };

  openUpdateForm = (objid: number) => {
    runInAction(() => {
      this.id.set(objid);
      this.updatefalse.set(!this.updatefalse.get());
      this.filterfalse.set(false);
    });
  };

  openFilterForm = () => {
    runInAction(() => {
      this.id.set(0);
      this.updatefalse.set(false);
      this.filterfalse.set(!this.filterfalse.get());
    });
  };

  sortArrayFun = (value: string) => {
    if (getLanguageStore.get('desc') === value) {
      runInAction(() => {
        let x = 'desc';
        let newobjectarray;
        newobjectarray = orderBy(
          getGlobalObjectStore().arrayofobjects.get(),
          (obj: TSQLObject) => obj.date,
          [x === 'desc' ? 'desc' : 'asc'],
        );
        getGlobalObjectStore().arrayofobjects.set(newobjectarray);
      });
    } else {
      runInAction(() => {
        let x = 'asc';
        let newobjectarray;
        newobjectarray = orderBy(
          getGlobalObjectStore().arrayofobjects.get(),
          (obj: TSQLObject) => obj.date,
          [x === 'asc' ? 'asc' : 'desc'],
        );
        getGlobalObjectStore().arrayofobjects.set(newobjectarray);
      });
    }
  };
  filteredArrayFun = () => {
    runInAction(() => {
      getGlobalObjectStore().filteredarrayofobjects.set(
        getGlobalObjectStore().arrayofobjects.get()
      );
    });
  }
}

const getExcelStore = memoize(
  () => {
    const excelMobx = new ExcelStore();
    return excelMobx;
  },
  () => 1,
);

export default getExcelStore;
