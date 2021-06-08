/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import tickername from  './TickerData'
import { dateTimePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
export default function TickerNew(props) {
  return (
    <Autocomplete
      id="Ticker"
      options={tickerList}
      getOptionLabel={(option) => option.title}
      style={{ width: 280 }}
      value={props.value}
     
        onChange={props.handleChange}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        
    />
  );
}

const tickerList=[]
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
for(var i=0;i<tickername.length;i++)
{
    tickerList.push({
        key:i,
       title:tickername[i]
    })
}

