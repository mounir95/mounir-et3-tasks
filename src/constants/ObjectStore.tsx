import {observable, action, computed} from 'mobx';

export interface TPrObject {
  Myid: number;
  Mydate: string;
  Myselist: string;
  Myplatform: string;
  Myreleaseversion: string;
  Mycomment: string;
  Myprlink: string;
  Mysize: string;
  Mydificulity: string;
  Mystatuslist: string;
  MyreviewedbyBY: string;
  MyreviewedbyAH: string;
  MyreviewedbyHT: string
}

class GlobalObject {
  @observable arrayofobjects: TPrObject[] = [];

  @action addObjectArray = (objectarray: TPrObject) => {
    this.arrayofobjects.push(objectarray);
  };

  @computed get objectarrayCount() {
    return this.arrayofobjects.length;
  }
}

const globalObj = new GlobalObject();
export default globalObj;
