import {memoize} from 'lodash';
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
      // .then(async res => await res.json());
      // .catch(error => console.error('Error:', error))
      // .then(async response => console.log('Success:', await response));
    }
  };

  sqlDelete = (objid: number) => {
    this.fetchFun(
      `${ipaddress}/api/delete`,
      'POST',
      {'Content-Type': 'application/json'},
      {id: objid},
    );
  };

  sqlGet = () => {
    this.fetchFun(
      `${ipaddress}/api/get`,
      'GET',
      {'Content-Type': 'application/json'},
      {id: 'id'},
    ).then(async res => {
      getGlobalObjectStore().arrayofobjects.set(await res.json());
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
