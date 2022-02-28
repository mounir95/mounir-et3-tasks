import {observable, action, makeObservable} from 'mobx';
import globalObject from './GlobalObjectStore';
import {updateFormMobx} from './UpdateFormStore';

class RequiredStore {
  comment: Boolean = false;
  released: Boolean = false;
  prlink: Boolean = false;
  constructor() {
    makeObservable(this, {
      comment: observable,
      released: observable,
      prlink: observable,
      checkUpdateValidation: action,
      checkInputValidation: action,
    });
  }

  resetTextInput = () => {
    this.comment = false;
    this.released = false;
    this.prlink = false;
  }

  checkUpdateValidation = () => {
    this.released = false;
    this.comment = false;
    this.prlink = false;
    if (updateFormMobx.objectval.Myreleaseversion.match('^[A-Za-z0-9]+$')) {
      this.released = true;
    }
    if (updateFormMobx.objectval.Myprlink.match('^[A-Za-z0-9]+$')) {
      this.prlink = true;
    }
    if (updateFormMobx.objectval.Mycomment.match('^[A-Za-z0-9]+$')) {
      this.comment = true;
    }

    if (
      this.released === true &&
      this.prlink === true &&
      this.comment === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  checkInputValidation = () => {
    this.released = false;
    this.comment = false;
    this.prlink = false;
    if (globalObject.emptyobject.Myreleaseversion.match('^[A-Za-z0-9]+$')) {
      this.released = true;
    }
    if (globalObject.emptyobject.Myprlink.match('^[A-Za-z0-9]+$')) {
      this.prlink = true;
    }
    if (globalObject.emptyobject.Mycomment.match('^[A-Za-z0-9]+$')) {
      this.comment = true;
    }

    if (
      this.released === true &&
      this.prlink === true &&
      this.comment === true
    ) {
      return true;
    } else {
      return false;
    }
  };
}
export const requiredMobx = new RequiredStore();
