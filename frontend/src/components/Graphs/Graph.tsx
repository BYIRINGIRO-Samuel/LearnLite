import { Pie } from "react-chartjs-2";
import Calendar from "react-calendar";

const Graph = () => {
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart: any) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bold 30px sans-serif";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;
      const total = data.datasets[0].data.reduce(
        (sum: number, value: number) => sum + value,
        0
      );
      const percentage =
        ((data.datasets[0].data[0] / total) * 100).toFixed(0) + "%";
      ctx.fillText(percentage, centerX, centerY);
      ctx.restore();
    },
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Your Overall Performance</h2>
        <div className="h-64 flex items-center justify-center">
          <Pie
            data={{
              labels: ["Completed", "Remaining"],
              datasets: [
                {
                  data: [90, 30],
                  backgroundColor: ["#2563EB", "#E0E0E0"],
                  borderColor: ["#2563EB", "#E0E0E0"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              cutout: "60%",
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                },
              },
            }}
            plugins={[textCenter]}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow flex justify-center">
        <Calendar />
      </div>
    </div>
  );
};

export default Graph;
