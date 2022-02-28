import {observable, action, makeObservable} from 'mobx';

class AddPageStore {
  addbuttontrue: Boolean = true;
  inputform: Boolean = false;
  addtext: string = 'ADD';
  constructor() {
    makeObservable(this, {
      addbuttontrue: observable,
      inputform: observable,
      addtext: observable,
      setAddPageMobx: action,
      resetAddPageMobx: action,
    });
  }
  setAddPageMobx = () => {
    this.addbuttontrue = true;
    this.inputform = false;
    this.addtext = 'ADD';
  };
  resetAddPageMobx = () => {
    this.addbuttontrue = false;
    this.inputform = true;
    this.addtext = 'Close';
  };
}
export const addPageMobx = new AddPageStore();