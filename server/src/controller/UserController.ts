import { Request } from 'express';
import { Http2ServerRequest } from 'http2';
import conn from '../conn';
import { TBodyObject } from '../constants/interfaces';
import {insertIntoObjectFun, updateObjectFun, deletIntoObjectFun, getIntoObjectFun, getObjectidFun} from '../library/UserLibraries';
import output from '../output';
// This folder contains all the business logic of your application. There should be a file for each 
// type of control. e.g. If you want to perform operations on users there should be UserController.js 
// file. If you want analytics there should be AnalyticsController.js

export async function insertIntoObject(req: Request, res: Express.Response){
  const {body} = req;
  try {
    const result = await insertIntoObjectFun(body);
    output.success(res, result);
  }
  catch(exception) {
    output.error(res, exception);
  }
}

export async function updateObject(req: Request, res: Express.Response){
  const {body} = req;
  try {
    const result = await updateObjectFun(body);
    output.success(res, result);
  }
  catch(exception) {
    output.error(res, exception);
  }
}

export async function deletObject(req: Request, res: Express.Response){
  const {body} = req;
  try {
    const result = await deletIntoObjectFun(body);
    output.success(res, result);
  }
  catch(exception) {
    output.error(res, exception);
  }
}

export const getFun = async (req: string, res: Express.Response) => {
    const result = await getIntoObjectFun((function(err: string, content: TBodyObject[]){
        if (err) {
        output.success(res, null);
    } else {
        output.success(res, content);
    }
  }))
}

  export const getidFun = async (req: string, res: Express.Response) => {
    const result = await getObjectidFun((function(err: string, content: TBodyObject[]){
        if (err) {
        output.success(res, null);
    } else {
        output.success(res, content);
    }
  }))
}