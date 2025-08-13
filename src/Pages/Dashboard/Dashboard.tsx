import BarGraph from '../../Charts/BarGraph';
import LineGraph from '../../Charts/LineGraph';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='user-analysis'>
      <h1 className='analysis-head'>User Analysis</h1>
      <div className='chats-grid-div'>
        <LineGraph />
        <BarGraph/>
      </div>
    </div>
  );
};

export default Dashboard;
