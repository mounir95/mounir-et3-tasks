import { FC } from 'react';

interface Props{
    commentFun : Function,
    setrefresh : boolean
}

const FilteredByComment : FC<Props> = ({ commentFun, setrefresh }) => {

    return (<div>
                    <label>Sorting By Comment : </label>
            { setrefresh && <div className="sort_by_comment">
            <input 
                className="input_textfield"
                type="text"
                onChange={( event : React.ChangeEvent<HTMLInputElement>) => commentFun( event )} />
        </div> }
        { !setrefresh && <div className="sort_by_comment">
            <input 
                className="input_textfield"
                type="text"
                onChange={( event : React.ChangeEvent<HTMLInputElement>) => commentFun( event )} />
        </div> } 
    </div>
    )
}
export default FilteredByComment