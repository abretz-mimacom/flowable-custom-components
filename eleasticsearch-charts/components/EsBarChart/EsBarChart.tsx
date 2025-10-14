import { useCustomComponent } from "@flowable/forms";
import { ExtraSettings } from "./generated-types";
import {
  Chart,
  Settings,
  BarSeries,
  Axis,
  Position,
  ScaleType,
} from "@elastic/charts";
import "@elastic/charts/dist/theme_only_light.css";

interface BarChartItem {
  label: string;
  value: string | number;
}

interface BarChartValue {
  items?: BarChartItem[];
}

type Value = BarChartValue;

export default function EsBarChart() {
  const { value } = useCustomComponent<Value, ExtraSettings>();

  // Parse and prepare data for the chart
  const chartData =
    value?.items?.map((item: BarChartItem) => ({
      x: item.label,
      y: parseFloat(String(item.value)) || 0,
    })) || [];

  // Sort data by value (descending)
  const sortedData = [...chartData].sort((a, b) => b.y - a.y);

  return (
    <div className="c:bg-white c:shadow-sm c:rounded-lg c:p-6">
      <h3 className="c:text-base c:font-semibold c:leading-6 c:text-gray-900 c:mb-4">
        Bar Chart with Sorting
      </h3>
      {sortedData.length > 0 ? (
        <div style={{ height: "400px" }}>
          <Chart>
            <Settings showLegend={false} />
            <BarSeries
              id="bars"
              name="Values"
              data={sortedData}
              xAccessor="x"
              yAccessors={["y"]}
              xScaleType={ScaleType.Ordinal}
            />
            <Axis id="bottom-axis" position={Position.Bottom} />
            <Axis id="left-axis" position={Position.Left} />
          </Chart>
        </div>
      ) : (
        <div className="c:text-center c:py-8 c:text-gray-500">
          No data available
        </div>
      )}
    </div>
  );
}
