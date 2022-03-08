import {memoize} from 'lodash';
import {observable} from 'mobx';

class FilterStore {
  platform = observable.box<Boolean>(true);
  se = observable.box<Boolean>(true);
  status = observable.box<Boolean>(true);
  comment = observable.box<Boolean>(true);
  date = observable.box<Date>(new Date(Date.now()));
}

const getFilterStore = memoize(
  () => {
    const filterMobx = new FilterStore();
    return filterMobx;
  },
  () => 1,
);

export default getFilterStore;
