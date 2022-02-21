import { Provider } from "react-redux";
import "./App.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import FunnelChart from "./components/Funnel/FunnelChart";
import Heading from "./components/Heading/Heading";
import LineChart from "./components/LineChart/LineChart";
import Stat from "./components/Stat/Stat";
import Welcome from "./components/Welcome/Welcome";
import { store } from "./redux/store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import RewardsChart from "./components/Rewards/RewardsChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

function App() {
  return (
    <Provider store={store}>
      <section className="dashboard">
        <div className="container">
          <Heading />
          <div className="wrapper-profile">
            <Welcome name="Paddy" />
            <div className="row">
              <Stat title="New Customers" stat="7,500" />
              <Stat title="Total Revenue" stat="$ 1,247" />
              <Stat title="Avg Order" stat="$ 120" />
            </div>
            <div className="row mt-4 pt-3">
              <div className="col-md-6 graph">
                <LineChart />
              </div>
              <div className="col-md-3 graph">
                <FunnelChart />
              </div>
              <div className="col-md-3 graph">
                <RewardsChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Provider>
  );
}

export default App;
