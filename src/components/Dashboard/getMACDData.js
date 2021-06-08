import axios from "axios";

const getMACDData = async (data) => {

  let res = await axios.post("https://secret-reaches-87237.herokuapp.com/getMACD", data);

  let MACDData = []
  let Dates = []

  for(let i = 0; i < res.data.data_len; i++)
  {
      MACDData.push(res.data.data[i]['macd']);
      Dates.push(res.data.data[i]['date']);
  }

  let MACD = {
      val: MACDData,
      dates: Dates
  }
  

  return MACD;
  
}

export default getMACDData;