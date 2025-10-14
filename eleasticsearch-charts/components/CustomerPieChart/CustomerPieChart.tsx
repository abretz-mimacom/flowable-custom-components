import { useCustomComponent } from "@flowable/forms";
import { ExtraSettings } from "./generated-types";
import { Cell, Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PieChartItem {
  label: string;
  value: string;
}

interface PieChartValue {
  items: PieChartItem[];
}

type Value = PieChartValue;

export default function CustomerPieChart() {
  const { value } = useCustomComponent<Value, ExtraSettings>();

  // Define colors for pie slices
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
    "#FFC658",
    "#FF6B9D",
  ];

  // Parse and prepare data for the chart
  const chartData =
    value?.items?.map((item: PieChartItem) => ({
      name: item.label,
      value: parseFloat(item.value) || 0,
    })) || [];

  return (
    <div className="c:bg-white c:shadow-sm c:rounded-lg c:p-6">
      <h3 className="c:text-base c:font-semibold c:leading-6 c:text-gray-900 c:mb-4">
        Customer Pie Chart
      </h3>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }: { name: string; percent: number }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((_entry, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="c:text-center c:py-8 c:text-gray-500">
          No data available
        </div>
      )}
    </div>
  );
}
