import axios from "axios";

const getRSIData = async (data) => {
  let res = await axios.post(
    "https://secret-reaches-87237.herokuapp.com/getRSI",
    data
  );

  let RSIData = [];
  let Dates = [];
  let Signals = [];
  let SignalDates = [];
  let InvestedAmount = [];
  let LiquidAmount = [];
  let TotalAmount = [];
  let Pnl = []

  for (let i = 0; i < res.data.data_len; i++) {
    RSIData.push(res.data.data[i]["RSI"]);
    Dates.push(res.data.data[i]["date"]);
  }
  

  for (let i = 0; i < res.data.ordered_signals_len; i++) {
    Signals.push(res.data.orderd_signals[i]["signal"]);
    SignalDates.push(res.data.orderd_signals[i]["date"]);
    InvestedAmount.push(res.data.orderd_signals[i]["invested_amount"]);
    LiquidAmount.push(res.data.orderd_signals[i]["liquid_amount"]);
    TotalAmount.push(res.data.orderd_signals[i]["total_amount"]);
    Pnl.push(res.data.orderd_signals[i]["pnl"]);
    
  }

  let RSI = {
    val: RSIData,
    dates: Dates,
    signals: Signals,
    signalDates: SignalDates,
    investedAmount: InvestedAmount,
    liquidAmount: LiquidAmount,
    totalAmount: TotalAmount,
    pnl: Pnl
  };

  return RSI;
};

export default getRSIData;
