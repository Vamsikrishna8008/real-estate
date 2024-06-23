const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-muted shadow-md rounded-md flex flex-col gap-2 p-3">
          <p className="text-muted-foreground text-sm">Total Compleded</p>
          <b className="text-2xl">49</b>
        </div>
        <div className="border border-muted shadow-md rounded-md flex flex-col gap-2 p-3">
          <p className="text-muted-foreground text-sm">Total Pending</p>
          <b className="text-2xl">49</b>
        </div>
        <div className="border border-muted shadow-md rounded-md flex flex-col gap-2 p-3">
          <p className="text-muted-foreground text-sm">Total Onprocessing</p>
          <b className="text-2xl">49</b>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
