import axios from "axios";

const getCandlestickData = async (data) => {

  const res = await axios.post(
    "https://secret-reaches-87237.herokuapp.com/",
    data
  );

  let dataArray = [];

  Array(res["data"]["length"])
    .fill(0)
    .map((_, i) => {
      dataArray.push(res["data"]["data"][i]);
      dataArray[i]["date"] = new Date(dataArray[i]["date"]);
    });
  return dataArray;
};

export default getCandlestickData;