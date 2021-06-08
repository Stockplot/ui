import axios from "axios";

const getRSIData = async (data) => {

  let res = await axios.post("https://secret-reaches-87237.herokuapp.com/getRSI", data);

  let RSIData = []
  let Dates = []

  for(let i = 0; i < res.data.data_len; i++)
  {
      RSIData.push(res.data.data[i]['RSI']);
      Dates.push(res.data.data[i]['Date']);
  }

  let RSI = {
      val: RSIData,
      dates: Dates
  }
  
  return RSI;
  
}

export default getRSIData;