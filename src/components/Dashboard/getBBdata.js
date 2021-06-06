import axios from "axios";

const getBBData = async (data) => {

  let res = await axios.post("https://secret-reaches-87237.herokuapp.com/getBBands", data);
  let ma = [];
  let ub = [];
  let lb = [];
  let close = [];
  let date = [];
  for (let i = 0; i < res.data.length; i++) {
    ma[i] = res.data.data[i].moving_average;
    ub[i] = res.data.data[i].upper_band;
    lb[i] = res.data.data[i].lower_band;
    close[i] = res.data.data[i].close;
    date[i] = res.data.data[i].date;
  }
  let BB = {
    avg: ma,
    uband: ub,
    lband: lb,
    close: close,
    date: date,
  }
  return BB;
  
}

export default getBBData;