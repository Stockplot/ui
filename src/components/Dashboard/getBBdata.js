import axios from "axios";

const getBBData = async (data) => {

  let res = await axios.post("https://secret-reaches-87237.herokuapp.com/getBBands", data);
  let ma = [];
  let ub = [];
  let lb = [];
  let close = [];
  let date = [];


  let Signals = [];
  let SignalDates = [];
  let InvestedAmount = [];
  let LiquidAmount = [];
  let TotalAmount = [];
  let Pnl = [];

  for (let i = 0; i < res.data.data_length; i++) {
    ma[i] = res.data.data[i].moving_average;
    ub[i] = res.data.data[i].upper_band;
    lb[i] = res.data.data[i].lower_band;
    close[i] = res.data.data[i].close;
    date[i] = res.data.data[i].date;
  }

  for (let i = 0; i < res.data["ordered_signals_len"]; i++) {
    Signals.push(res.data.ordered_signals[i]["signal"]);
    SignalDates.push(res.data.ordered_signals[i]["date"]);
    InvestedAmount.push(res.data.ordered_signals[i]["invested_amount"]);
    LiquidAmount.push(res.data.ordered_signals[i]["liquid_amount"]);
    TotalAmount.push(res.data.ordered_signals[i]["total_amount"]);
    Pnl.push(res.data.ordered_signals[i]["pnl"]);
    
  }

  let BB = {
    avg: ma,
    uband: ub,
    lband: lb,
    close: close,
    date: date,
    signals: Signals,
    signalDates: SignalDates,
    investedAmount: InvestedAmount,
    liquidAmount: LiquidAmount,
    totalAmount: TotalAmount,
    pnl: Pnl
  }
  return BB;
  
}

export default getBBData;