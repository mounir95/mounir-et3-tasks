import {memoize} from 'lodash';
import {runInAction} from 'mobx';
import {ipaddress} from '../constants/constants';
import getGlobalObjectStore from './GlobalObjectStore';

class SqlQueryStore {
  fetchFun = (
    geturl: string,
    getmethod: string,
    getheader: HeadersInit,
    getbody: object,
  ) => {
    if (getmethod === 'GET') {
      return fetch(geturl, {
        method: getmethod,
        headers: getheader,
      });
    } else {
      return fetch(geturl, {
        method: getmethod,
        headers: getheader,
        body: JSON.stringify(getbody),
      });
    }
  };

  sqlDelete = (objid: number) => {
    runInAction(() => {
      this.fetchFun(
        `${ipaddress}/api/delete`,
        'POST',
        {'Content-Type': 'application/json'},
        {id: objid},
      );
    });
  };

  sqlGet = () => {
    this.fetchFun(
      `${ipaddress}/api/get`,
      'GET',
      {'Content-Type': 'application/json'},
      {id: 'id'},
    ).then(async res => {
      const result = await res.json();
      runInAction(() => {
        getGlobalObjectStore().arrayofobjects.set(result);
      });
    });
  };

  sqlGetid = () => {
    this.fetchFun(
      `${ipaddress}/api/getid`,
      'GET',
      {'Content-Type': 'application/json'},
      {id: 'id'},
    ).then(async res => {
      const result = await res.json();
      runInAction(() => {
        if (result[0].id >= 0) {
          getGlobalObjectStore().lastindex.set(result[0].id);
        } else{
          getGlobalObjectStore().lastindex.set(0);
        }
      });
    });
  };

  sqlInsert = (data: object) => {
    this.fetchFun(
      `${ipaddress}/api/insert`,
      'POST',
      {'Content-Type': 'application/json'},
      data,
    );
  };

  sqlUpdate = (data: object) => {
    this.fetchFun(
      `${ipaddress}/api/update`,
      'POST',
      {'Content-Type': 'application/json'},
      data,
    );
  };
}

const getSqlQueryStore = memoize(
  () => {
    const sqlquery = new SqlQueryStore();
    return sqlquery;
  },
  () => 1,
);

export default getSqlQueryStore;
