import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TSQLObject} from '../interfaces/interfaces';
import getGlobalObjectStore from './GlobalObjectStore';
import filter from 'lodash/filter';

class FilterStore {
  platform = observable.box<Boolean>(true);
  se = observable.box<Boolean>(true);
  status = observable.box<Boolean>(true);
  comment = observable.box<Boolean>(true);
  date = observable.box<Date>(new Date(Date.now()));

  filterStatusFun = (event: React.ChangeEvent) => {
    runInAction(() => {
      getGlobalObjectStore().filteredarrayofobjects.set(
        filter(getGlobalObjectStore().arrayofobjects.get(), (c: TSQLObject) => {
          if (c.hasOwnProperty('statuslist')) {
            return c.statuslist === event.toString();
          }
        }),
      );
      this.platform.set(!this.platform.get());
      this.se.set(!this.se.get());
      this.status.set(this.status.get());
      this.comment.set(!this.comment.get());
    });
  };

  filterSElistFun = (event: React.ChangeEvent) => {
    runInAction(() => {
      getGlobalObjectStore().filteredarrayofobjects.set(
        filter(getGlobalObjectStore().arrayofobjects.get(), (c: TSQLObject) => {
          if (c.hasOwnProperty('selist')) {
            return c.selist === event.toString();
          }
        }),
      );
      this.platform.set(!this.platform.get());
      this.se.set(this.se.get());
      this.status.set(!this.status.get());
      this.comment.set(!this.comment.get());
    });
  };

  filterPlatformFun = (event: React.ChangeEvent) => {
    runInAction(() => {
      getGlobalObjectStore().filteredarrayofobjects.set(
        filter(getGlobalObjectStore().arrayofobjects.get(), (c: TSQLObject) => {
          if (c.hasOwnProperty('platform')) {
            return c.platform === event.toString();
          }
        }),
      );
      this.platform.set(this.platform.get());
      this.se.set(this.se.get());
      this.status.set(!this.status.get());
      this.comment.set(!this.comment.get());
    });
  };

  textChangedFun = (event: string) => {
    runInAction(() => {
      getGlobalObjectStore().filteredarrayofobjects.set(
        filter(getGlobalObjectStore().arrayofobjects.get(), (c: TSQLObject) => {
          if (c.hasOwnProperty('comment')) {
            return c.comment.includes(event) === true;
          }
        }),
      );
      this.platform.set(!this.platform.get());
      this.se.set(!this.se.get());
      this.status.set(!this.status.get());
      this.comment.set(this.comment.get());
    });
  };
}

const getFilterStore = memoize(
  () => {
    const filterMobx = new FilterStore();
    return filterMobx;
  },
  () => 1,
);

export default getFilterStore;
