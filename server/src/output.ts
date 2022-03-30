import { Response } from "express";
import { TBodyObject } from "./constants/interfaces";

const output = {
  success : (res: any, result: any) => {
    // console.log(result);
    res.send(result);
  },
  error : (res: any, exception: any) => {
    // console.log('error')
    res.send(exception);
  }
}
export default output;