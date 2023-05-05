import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';
import '../App.css'

const Currency = () => {
    const { currency ,dispatch} = useContext(AppContext);
    const [val, setVal] = React.useState(currency);
    const handleOnChange = (e) => {
        setVal(e.target.value);
        console.log(e.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    };

  return (
    <div className='alert alert-secondary'>
        <label htmlFor="currency-input">Currency:</label>
        <select value={val} onChange={handleOnChange} id="currency-input" style={{backgroundColor:"#93e499"}} className="form-control" >
            <option value="£">{"£(Pound)"}</option>
            <option value="$">{"$(Dollar)"}</option>
            <option value="€">{"€(Eouro)"}</option>
            <option value="&#8377;">&#8377;{"(Rupee)"}</option>
        </select>
    </div>
  )
}

export default Currency