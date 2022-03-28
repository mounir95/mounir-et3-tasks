import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

class SortFilterStore {
  dateTrueFalse = observable.box<Boolean>(true);
  filtercontainertrue = observable.box<Boolean>(true);
  setDateFun = () => {
    runInAction(() => {
      this.dateTrueFalse.set(!this.dateTrueFalse.get());
    });
  };

  closeopenFilter = () => {
    runInAction(() => {
      this.dateTrueFalse.set(true);
      this.filtercontainertrue.set(!this.filtercontainertrue.get());
    });
  };

}

const getSortFilterStore = memoize(
  () => {
    const sortFilterMobx = new SortFilterStore();
    return sortFilterMobx;
  },
  () => 1,
);

export default getSortFilterStore;
