import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import getGlobalObjectStore from './GlobalObjectStore';
import getUpdateFormStore from './UpdateFormStore';

class RequiredStore {
  comment = observable.box<Boolean>(false);
  released = observable.box<Boolean>(false);
  prlink = observable.box<Boolean>(false);

  resetValidationTrue = () => {
    runInAction(() => {
      this.comment.set(false);
      this.released.set(false);
      this.prlink.set(false);
    });
  };

  setValidationTrue = () => {
    runInAction(() => {
      this.comment.set(true);
      this.released.set(true);
      this.prlink.set(true);
    });
  };

  checkUpdateValidation = () => {
    runInAction(() => {
      if (getUpdateFormStore().Myreleaseversion.get().match('^[A-Za-z0-9]+$')) {
        this.released.set(true);
      }
      if (getUpdateFormStore().Myprlink.get().match('^[A-Za-z0-9]+$')) {
        this.prlink.set(true);
      }
      if (getUpdateFormStore().Mycomment.get().match('^[A-Za-z0-9]+$')) {
        this.comment.set(true);
      }
    });
    if (
      this.released.get() === true &&
      this.prlink.get() === true &&
      this.comment.get() === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  checkInputValidation = () => {
    runInAction(() => {
      if (
        getGlobalObjectStore()
          .emptyobject.get()
          .Myreleaseversion.match('^[A-Za-z0-9]+$')
      ) {
        this.released.set(true);
      }
      if (
        getGlobalObjectStore()
          .emptyobject.get()
          .Myprlink.match('^[A-Za-z0-9]+$')
      ) {
        this.prlink.set(true);
      }
      if (
        getGlobalObjectStore()
          .emptyobject.get()
          .Mycomment.match('^[A-Za-z0-9]+$')
      ) {
        this.comment.set(true);
      }
    });
    if (
      this.released.get() === true &&
      this.prlink.get() === true &&
      this.comment.get() === true
    ) {
      return true;
    } else {
      return false;
    }
  };
}

const getRequiredStore = memoize(
  () => {
    const requiredMobx = new RequiredStore();
    return requiredMobx;
  },
  () => 1,
);

export default getRequiredStore;
