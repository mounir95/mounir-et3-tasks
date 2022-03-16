import {memoize} from 'lodash';
import {observable} from 'mobx';
import getGlobalObjectStore from './GlobalObjectStore';

class SqlQueryStore {
  link = observable.box<string>('http://192.168.42.231:3001');
  sqlDelete = (objid: number) => {
    fetch(`${this.link}/api/delete`, {
      method: 'DELETE',
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
    console.log(' i am here');
    console.log(`${this.link}/api/get`);
    fetch(`${this.link}/api/get`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }).then(async res => {
      getGlobalObjectStore().arrayofobjects.set(await res.json());
    });
  };

  sqlInsert = (data: object) => {
    fetch(`${this.link}/api/insert`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    // .then(async res => await res.json());
    // .catch(error => console.error('Error:', error))
    // .then(async response => console.log('Success:', await response));
  };

  sqlUpdate = (data: object) => {
    fetch(`${this.link}/api/insert`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    // .then(async res => await res.json());
    // .catch(error => console.error('Error:', error))
    // .then(async response => console.log('Success:', await response));
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
