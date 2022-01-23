import React from 'react';

export interface Iobject{
  Date: string, 
  SE_list: string[], 
  Platform: string[], 
  Release_Version: string, 
  Comment: string,
  Pr_Link: string, 
  Size: string[],
  Dificulity: string[], 
  Status_list: string[], 
  Reveiwed_by_BY: string,
  Reveiwed_by_AH: string, 
  Reveiwed_by_HT: string
}

let date = new Date();
const globalState : Partial<Iobject> | any = {
    Date: (date.getUTCMonth()+1) + '/' + date.getUTCDate() + '/' + date.getUTCFullYear(),
    SE_list:["AH", "BY", "HT"],
    Platform:["mobile-client", "kh-server-node", "kh-sqs-worker", "kh-server-firebase", "kh-admin-client",
    "kh-admin-server-new", "kh-admin", "fa-mobile-client", "fa-server-firebase", "kh-website", "fa-website"],
    Release_Version:'8.0.1',
    Comment:"Commit Text",
    Pr_Link:"https://github.com/et3/anylink",
    Size:["Easy", "Medium", "Hard"],
    Dificulity:["Easy", "Medium", "Hard"],
    Status_list : ["Has Comments", "Merged", "Needs Reveiw", "Closed"],
    Reveiwed_by_BY : "no",
    Reveiwed_by_AH : "no",
    Reveiwed_by_HT : "no"
  };

  export const globalStateContext = React.createContext<Partial<Iobject> | any>(globalState);

// the consept of createcontext is to create a global varibale can be accessed by import.aslo 
// this global variable can be changed at any level an set eaul to the state level and it will be changed in all proj
// in the dom memory. these updates will disappear in refreshing/loading the page and 
// the globalstate contant will be set again as they are declared in above