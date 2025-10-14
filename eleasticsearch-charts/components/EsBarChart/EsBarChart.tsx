import { useCustomComponent } from "@flowable/forms";
import { ExtraSettings } from "./generated-types";

type Value = any;

export default function EsBarChart() {
  const { value = 0, setValue } = useCustomComponent<Value, ExtraSettings>();

  return (
    // @Copilot: please delete
    <div className="c:bg-white c:shadow-sm c:rounded-lg c:p-6">
      <h3 className="c:text-base c:font-semibold c:leading-6 c:text-gray-900">
        Custom component <span className="font-bold">EsBarChart</span>
      </h3>
      <p className="c:mt-2 c:max-w-xl c:text-sm c:text-gray-500">
        This is your custom component, <br />
        you can edit it at <code>/components/EsBarChart/EsBarChart.tsx</code> file.
      </p>
      <button
        onClick={() => {
          setValue((value || 0) + 1);
        }}
        className="c:mt-5 c:tw:inline-flex c:items-center c:rounded-md c:bg-indigo-600 c:px-3 c:py-2 c:text-sm c:font-semibold c:text-white c:shadow-xs c:hover:bg-indigo-500 c:focus-visible:outline c:focus-visible:outline-2 c:focus-visible:outline-offset-2 c:focus-visible:outline-indigo-500 c:cursor-pointer"
      >
        Change value {value}
      </button>
    </div>
    // @Copilot: please implment/embed a prebuilt package of this bar chart from @elastic/charts: https://elastic.github.io/elastic-charts/storybook/?path=/story/bar-chart--rendering-sort&globals=toggles.showHeader:true;toggles.showChartTitle:false;toggles.showChartDescription:false;toggles.showChartBoundary:false;theme:light
  );
}
