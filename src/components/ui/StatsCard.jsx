import React from 'react';

const StatsCard = ({ icon, value, label }) => {
  return (
    <div className="stats-card p-6 rounded-xl text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-2">{value}</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatsCard;