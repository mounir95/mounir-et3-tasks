import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import getLanguageStore from './LanguageStore';

class AddPageStore {
  textinput = observable.box<string>('mytest');
  addbuttontrue = observable.box<Boolean>(true);
  inputform = observable.box<Boolean>(false);
  addtext = observable.box<string>(null);
  openInputForm = () => {
    runInAction(() => {
      this.addbuttontrue.set(true);
      this.inputform.set(false);
      this.addtext.set(getLanguageStore.get('addtext'));
    });
  };
  closeInputForm = () => {
    runInAction(() => {
      this.addbuttontrue.set(false);
      this.inputform.set(true);
      this.addtext.set(getLanguageStore.get('closetext'));
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