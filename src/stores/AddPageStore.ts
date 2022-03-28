import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import getGlobalObjectStore from './GlobalObjectStore';
import getLanguageStore from './LanguageStore';
import getRequiredStore from './RequiredStore';

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

  InputSSDFun = (valname: string, eventtostr: string) => {
    runInAction(() => {
      if (valname === 'statustext') {
        getGlobalObjectStore().emptyobject.get().Mystatuslist = eventtostr;
      }
      if (valname === 'sizetext') {
        getGlobalObjectStore().emptyobject.get().Mysize = eventtostr;
      }
      if (valname === 'dificulitytext') {
        getGlobalObjectStore().emptyobject.get().Mydificulity = eventtostr;
      }
    });
  };

  InputSelFun = (valname: string, eventtostr: string) => {
    runInAction(() => {
      if (valname === 'setext') {
        getGlobalObjectStore().emptyobject.get().Myselist = eventtostr;
      }
      if (valname === 'platformtext') {
        getGlobalObjectStore().emptyobject.get().Myplatform = eventtostr;
      }
    });
  };

  InputRadFun = (valname: string, eventtostr: string) => {
    runInAction(() => {
      if (valname === 'byapprove') {
        getGlobalObjectStore().emptyobject.get().MyreviewedbyBY = eventtostr;
      }
      if (valname === 'ahapprove') {
        getGlobalObjectStore().emptyobject.get().MyreviewedbyAH = eventtostr;
      }
      if (valname === 'htapprove') {
        getGlobalObjectStore().emptyobject.get().MyreviewedbyHT = eventtostr;
      }
    });
  };

  InputTextFun = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ) => {
    runInAction(() => {
      if (Atribuite === 'comment') {
        getGlobalObjectStore().emptyobject.get().Mycomment = event.toString();
      } else if (Atribuite === 'pr_Link') {
        getGlobalObjectStore().emptyobject.get().Myprlink = event.toString();
      } else if (Atribuite === 'release_version') {
        getGlobalObjectStore().emptyobject.get().Myreleaseversion =
          event.toString();
      }
      getRequiredStore().checkInputValidation();
    });
  };
}

const getAddPageStore = memoize(
  () => {
    const addPageMobx = new AddPageStore();
    return addPageMobx;
  },
  () => 1,
);

export default getAddPageStore;
