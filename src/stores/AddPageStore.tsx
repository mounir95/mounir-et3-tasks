import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

class AddPageStore {
  textinput = observable.box<string>('mytest');
  addbuttontrue = observable.box<Boolean>(true);
  inputform = observable.box<Boolean>(false);
  addtext = observable.box<string>('ADD');
  openInputForm = () => {
    runInAction(() => {
      this.addbuttontrue.set(true);
      this.inputform.set(false);
      this.addtext.set('ADD');
    });
  };
  closeInputForm = () => {
    runInAction(() => {
      this.addbuttontrue.set(false);
      this.inputform.set(true);
      this.addtext.set('Close');
    });
  };
}

const getAddPageStore = memoize(
  () => {
    const addPageMobx = new AddPageStore();
    return addPageMobx;
  },
  () => 1
);

export default getAddPageStore;