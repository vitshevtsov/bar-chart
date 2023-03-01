import React from 'react';
import clsx from 'clsx';
import { BarGroup } from '../BarGroup';
import { Legend } from '../Legend';
import { ChartProps } from './ChartProps';
import { getMaxValue } from './ChartUtils';

import './Chart.css';

/**
 * Компонент Столбчатая диаграмма
 */
const Chart = ({ barGap = 20, barWidth = 50, maxMainAxisLength = 600, showValues = false, ...props }: ChartProps) => {
  const maxValue = getMaxValue(props.data.datasets);

  const chartClassName = React.useMemo(() => {
    return clsx(
      'chart',
      {
        ['chart--horizontal']: props.horizontal,
      },
      props.className,
    );
  }, [props.className, props.horizontal]);

  const chartGroupsClassName = React.useMemo(() => {
    return clsx('chart__groups', {
      ['chart__groups--wrap']: props.wrap,
      ['chart__groups--horizontal']: props.horizontal,
    });
  }, [props.horizontal, props.wrap]);

  return (
    <div className={chartClassName}>
      <Legend datasets={props.data.datasets} />

      <div className={chartGroupsClassName}>
        {props.data.labels.map((label, index) => {
          return (
            <BarGroup
              barGap={barGap}
              barWidth={barWidth}
              data={props.data}
              horizontal={props.horizontal}
              key={label}
              labelIndex={index}
              maxSVGHeight={maxMainAxisLength}
              maxValue={maxValue}
              showValues={showValues}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
