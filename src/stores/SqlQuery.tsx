import {memoize} from 'lodash';
import {ipaddress} from '../constants/constants';
import getGlobalObjectStore from './GlobalObjectStore';

class SqlQueryStore {

  sqlDelete = (objid: number) => {
    fetch(`${ipaddress}/api/delete`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: objid,
      }),
    });
    // .then(async res => await res.json());
    // .catch(error => console.error('Error:', error))
    // .then(async response => console.log('Success:', await response));
  };

  sqlGet = () => {
    fetch(`${ipaddress}/api/get`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }).then(async res => {
      getGlobalObjectStore().arrayofobjects.set(await res.json());
    });
  };

  sqlInsert = (data: object) => {
    fetch(`${ipaddress}/api/insert`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
  };

  sqlUpdate = (data: object) => {
    fetch(`${ipaddress}/api/update`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
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
