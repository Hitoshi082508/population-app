import React from 'react';
import styled from 'styled-components';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// type
import { PrefPopulationData } from 'src/types';

type Props = {
  className?: string
  data: PrefPopulationData[];
}
export const FCGraph: React.FC<Props> = ({ className, data }) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: "各都道府県の人口",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: [
        '1960年',
        '1965年',
        '1970年',
        '1975年',
        '1980年',
        '1985年',
        '1990年',
        '1995年',
        '2000年',
        '2005年',
        '2010年',
        '2015年',
        '2020年',
        '2025年',
        '2030年',
        '2035年',
        '2040年',
        '2045年',
      ],
    },
    yAxis: {
      title: {
        text: "人口",
      },
    },
    series: data.length === 0 ? [{ type: "line", name: "都道府県名", data: [] }] : data,
  };

  return (
    <div className={className}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
export const Graph = styled(FCGraph)``