import { ChartOptions, ChartData } from "chart.js";
import * as stockgenerator from "stock-data-generator";

export const options: ChartOptions<"line"> = {
  responsive: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const config = {
  startDateTime: "2010-01-01T09:15:00.000Z",
  startPrice: 100,
  noOfDays: 250,
  tradeHoursPerDay: 6,
  changeBy: 0.01,
  maxDailyChangePercent: {
    min: 1.5,
    max: 3.5,
  },
};

const result = stockgenerator.generateCandleStickData(config, "1h");

const labels = result.map((item) => item.dateTime);

export const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: result.map((item) => item.close),
      borderColor: "#50C878	",
      backgroundColor: "#50C878",
      tension: 0.4,
    },
  ],
};
