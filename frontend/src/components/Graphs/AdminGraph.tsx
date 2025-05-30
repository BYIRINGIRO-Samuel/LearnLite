import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value1: 800, value2: 700 },
  { name: 'Feb', value1: 750, value2: 650 },
  { name: 'Mar', value1: 900, value2: 780 },
  { name: 'Apr', value1: 850, value2: 720 },
  { name: 'May', value1: 1100, value2: 850 },
  { name: 'Jun', value1: 1050, value2: 810 },
  { name: 'Jul', value1: 950, value2: 900 },
  { name: 'Aug', value1: 1000, value2: 920 },
  { name: 'Sep', value1: 1200, value2: 1000 },
  { name: 'Oct', value1: 1150, value2: 980 },
  { name: 'Nov', value1: 1050, value2: 850 },
  { name: 'Dec', value1: 900, value2: 700 },
];

const AdminGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value1" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AdminGraph;
