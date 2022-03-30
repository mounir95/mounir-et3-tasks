import {insertIntoFun, UpdateIntoFun, deletIntoFun, getObjectsFun, getMaxIdFun} from '../model/UserModel';
import {TBodyObject} from '../constants/interfaces';
// All your routing-related logic should go into this folder. Again divide this logic into multiple
// files based on functionality. i.e User routing functionality should go into UserRouter.js.

export const insertIntoObjectFun = async (body: TBodyObject) => {
    const result = await insertIntoFun(body);
    if (result === null) {
        return 'err';
    } else{
        return ' successfully';
    }
}

export const updateObjectFun = (body: TBodyObject) => {
    const result = UpdateIntoFun(body);
    if (result === null) {
        return 'err';
    } else{
        return ' successfully';
    }
}

export const deletIntoObjectFun = async (body: TBodyObject) => {
    const result = await deletIntoFun(body);
    if (result === null) {
        return 'err';
    } else{
        return ' successfully';
    }
}

export const getIntoObjectFun = async (callback: Function) => {
    return await getObjectsFun((function(err: string, content: TBodyObject[]){
        if (err) {
          callback(err, null);
    } else {
        callback(null, content);
    }
}))
}

export const getObjectidFun = async (callback: Function) => {
    return await getMaxIdFun((function(err: string, content: TBodyObject[]){
        if (err) {
          callback(err, null);
    } else {
        callback(null, content);
    }
}))
}