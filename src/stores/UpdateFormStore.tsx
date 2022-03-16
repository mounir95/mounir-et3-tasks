import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import getRequiredStore from './RequiredStore';

class UpdateFormStore {
  selectpagetrue = observable.box<Boolean>(true);
  textpagetrue = observable.box<Boolean>(false);
  ssdliststrue = observable.box<Boolean>(false);
  radiobuttonstrue = observable.box<Boolean>(false);
  Myselist = observable.box<string>('');
  Myplatform = observable.box<string>('');
  Myreleaseversion = observable.box<string>('');
  Mycomment = observable.box<string>('');
  Myprlink = observable.box<string>('');
  Mystatuslist = observable.box<string>('');
  Mysize = observable.box<string>('');
  Mydificulity = observable.box<string>('');
  MyreviewedbyAH = observable.box<string>('');
  MyreviewedbyHT = observable.box<string>('');
  MyreviewedbyBY = observable.box<string>('');
  selectList = () => {
    runInAction(() => {
      this.selectpagetrue.set(false);
      this.textpagetrue.set(true);
      this.ssdliststrue.set(false);
      this.radiobuttonstrue.set(false);
    });
  };
  ssdLists = () => {
    runInAction(() => {
      this.selectpagetrue.set(false);
      this.textpagetrue.set(false);
      this.ssdliststrue.set(false);
      this.radiobuttonstrue.set(true);
    });
  };
  textPage = () => {
    runInAction(() => {
      if (getRequiredStore().checkUpdateValidation() === true) {
        this.selectpagetrue.set(false);
        this.textpagetrue.set(false);
        this.ssdliststrue.set(true);
        this.radiobuttonstrue.set(false);
      }
    });
  };
  resetStore = async () => {
    runInAction(() => {
      this.selectpagetrue.set(true);
      this.textpagetrue.set(false);
      this.ssdliststrue.set(false);
      this.radiobuttonstrue.set(false);
    });
  };
}
const getUpdateFormStore = memoize(
  () => {
    const updateFormMobx = new UpdateFormStore();
    return updateFormMobx;
  },
  () => 1,
);

export default getUpdateFormStore;
