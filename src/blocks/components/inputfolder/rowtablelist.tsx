import { FC } from 'react';
import { Context } from 'vm';

interface Props{
    value : Context,
    buttonvalue : any,
    buttonsaveval : any
    idpressed : number,
    OndeleteSubmit : Function,
    OnupdateSumit : Function
}

const RowLists :FC<Props>= ({ value, buttonvalue, buttonsaveval, idpressed, OndeleteSubmit, OnupdateSumit }) :any => {
    if(idpressed === -1){
        return (
            <tr className='second_row_css'>
                <td>{ JSON.stringify(value.Mydate) }</td>
                <td>{ value.Myse_list }</td>
                <td>{ value.Myid }</td>
                <td>{ value.Myplatform }</td>
                <td>{ value.Myrelease_version }</td>
                <td>{ value.Mycomment }</td>
                <td>{ value.Mypr_Link }</td>
                <td>{ value.Mysize }</td>
                <td>{ value.Mydificulity }</td>
                <td>{ value.Mystatus_list }</td>
                <td>{ value.Myreveiwed_by_BY }</td>
                <td>{ value.Myreveiwed_by_AH }</td>
                <td>{ value.Myreveiwed_by_HT }</td>
                <button onClick={() => OndeleteSubmit(value.Myid)}>X</button>
                <button onClick={() =>OnupdateSumit(value.Myid) }>{ buttonvalue }</button>
            </tr>
        )
    }
    else if(idpressed === value.Myid){
        return  (
                <tr className='second_row_css'>
                    <td>{ JSON.stringify(value.Mydate) }</td>
                    <td>{ value.Myse_list }</td>
                    <td>{ value.Myid }</td>
                    <td>{ value.Myplatform }</td>
                    <td>{ value.Myrelease_version }</td>
                    <td>{ value.Mycomment }</td>
                    <td>{ value.Mypr_Link }</td>
                    <td>{ value.Mysize }</td>
                    <td>{ value.Mydificulity }</td>
                    <td>{ value.Mystatus_list }</td>
                    <td>{ value.Myreveiwed_by_BY }</td>
                    <td>{ value.Myreveiwed_by_AH }</td>
                    <td>{ value.Myreveiwed_by_HT }</td>
                    <button onClick={() => OndeleteSubmit(value.Myid)}>X</button>
                    <button onClick={() =>OnupdateSumit(value.Myid) }>{ buttonsaveval }</button>
                </tr>
        )
    }
}
export default RowLists