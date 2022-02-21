import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    barChartData: [],
    lineChartData: [],
    circularProgressData: [],
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    barConfig: {
      maintainAspectRatio: false,
      indexAxis: "y",
      responsive: true,
      scales: {
        yAxes: {
          grid: {
            color: "rgba(0,0,0,0)",
          },
          ticks: {
            crossAlign: "far",
            font: {
              family: "'Satoshi-light'",
            },
          },
        },
        xAxes: {
          grid: {
            borderDash: [8, 6],
          },
          ticks: {
            font: {
              family: "'Satoshi-light'",
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        bar: {
          borderRadius: 8,
          inflateAmount: 2,
        },
      },
    },
    lineConfig: {
      responsive: true,
      scales: {
        yAxes: {
          grid: {
            color: "rgba(0,0,0,0)",
          },
          ticks: {
            font: {
              family: "'Satoshi-light'",
            },
          },
        },
        xAxes: {
          ticks: {
            font: {
              family: "'Satoshi-light'",
            },
          },
        },
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 12,
            pointStyle: "circle",
            usePointStyle: true,
            font: {
              family: "'Satoshi-Medium'",
              size: 16,
            },
          },
        },
      },
      elements: {
        point: {
          pointStyle: "circle",
          radius: 0,
        },
      },
    },
    doughnutConfig: {
      responsive: true,
      cutout: 90,
      spacing: 8,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  },
  reducers: {
    setBarChartData: (state, action) => {
      state.barChartData = action.payload;
    },
    setLineChartData: (state, action) => {
      state.lineChartData = action.payload;
    },
    setCircularChartData: (state, action) => {
      state.circularProgressData = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const dataReducer = dataSlice.reducer;

export const {
  setBarChartData,
  setLineChartData,
  setCircularChartData,
  setEndDate,
  setStartDate,
} = dataSlice.actions;
