import {observable, action, makeObservable} from 'mobx';
import {TPrObject} from '../constant/constants';
import globalObject from './GlobalObjectStore';
import {requiredMobx} from './RequiredStore';

class UpdateFormStore {
  selectpagetrue: Boolean = true;
  textpagetrue: Boolean = false;
  ssdliststrue: Boolean = false;
  radiobuttonstrue: Boolean = false;
  objectval: TPrObject = globalObject.emptyobject;
  constructor() {
    makeObservable(this, {
      selectpagetrue: observable,
      textpagetrue: observable,
      ssdliststrue: observable,
      radiobuttonstrue: observable,
      objectval: observable,
      selectList: action,
      ssdLists: action,
      textPage: action,
    });
  }
  selectList = () => {
    this.selectpagetrue = false;
    this.textpagetrue = true;
    this.ssdliststrue = false;
    this.radiobuttonstrue = false;
    this.objectval = this.objectval;
  };
  ssdLists = () => {
    this.selectpagetrue = false;
    this.textpagetrue = false;
    this.ssdliststrue = false;
    this.radiobuttonstrue = true;
    this.objectval = this.objectval;
  };
  textPage = () => {
    if (requiredMobx.checkUpdateValidation() === true) {
      this.selectpagetrue = false;
      this.textpagetrue = false;
      this.ssdliststrue = true;
      this.radiobuttonstrue = false;
      this.objectval = this.objectval;
      requiredMobx.resetTextInput();
    }
  };
  resetStore = () => {
    this.selectpagetrue = true;
    this.textpagetrue = false;
    this.ssdliststrue = false;
    this.radiobuttonstrue = false;
    this.objectval = globalObject.emptyobject;
  };
}
export const updateFormMobx = new UpdateFormStore();
