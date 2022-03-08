import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

class ExcelStore {
  id = observable.box<number>(-1);
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
}

const getExcelStore = memoize(
  () => {
    const excelMobx = new ExcelStore();
    return excelMobx;
  },
  () => 1,
);

export default getExcelStore;
