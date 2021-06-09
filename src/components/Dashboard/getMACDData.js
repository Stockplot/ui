import axios from "axios";

const getMACDData = async (data) => {

  let res = await axios.post("https://secret-reaches-87237.herokuapp.com/getMACD", data);

  let MACDData = [];
  let Dates = [];
  let Signals = [];
  let SignalDates = [];
  let InvestedAmount = [];
  let LiquidAmount = [];
  let TotalAmount = [];
  let Pnl = [];

  for(let i = 0; i < res.data.data_len; i++)
  {
      MACDData.push(res.data.data[i]['macd']);
      Dates.push(res.data.data[i]['date']);
  }

  for (let i = 0; i < res.data["ordered_ signals_len"]; i++) {
    Signals.push(res.data.ordered_signal[i]["signal"]);
    SignalDates.push(res.data.ordered_signal[i]["date"]);
    InvestedAmount.push(res.data.ordered_signal[i]["invested_amount"]);
    LiquidAmount.push(res.data.ordered_signal[i]["liquid_amount"]);
    TotalAmount.push(res.data.ordered_signal[i]["total_amount"]);
    Pnl.push(res.data.ordered_signal[i]["pnl"]);
    
  }

  let MACD = {
      val: MACDData,
      dates: Dates,
      signals: Signals,
      signalDates: SignalDates,
      investedAmount: InvestedAmount,
      liquidAmount: LiquidAmount,
      totalAmount: TotalAmount,
      pnl: Pnl
  }
  

  return MACD;
  
}

export default getMACDData;