import React from 'react';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="flex flex-wrap -mx-4">
        <DashboardCard title="Total Student">
          <p>200</p>
        </DashboardCard>
        <DashboardCard title="% Present">
          <p>85%</p>
        </DashboardCard>
        <DashboardCard title="% Absent">
          <p>15%</p>
        </DashboardCard>
        <DashboardCard title="Absent+Present Bar Chart">
          {/* Placeholder for Bar Chart */}
          <div className="h-40 bg-gray-200 rounded"></div>
        </DashboardCard>
        <DashboardCard title="Donut Chart (Month Present+Absent)">
          {/* Placeholder for Donut Chart */}
          <div className="h-40 bg-gray-200 rounded"></div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default Dashboard;
