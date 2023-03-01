import React from 'react';
import { BarGroup } from '../BarGroup';
import { Legend } from '../Legend';
import { ChartProps } from './ChartProps';
import { getMaxValue } from './ChartUtils';

import './Chart.css';

/**
 * Компонент Столбчатая диаграмма
 */
const Chart: React.FC<ChartProps> = (props) => {
  const maxValue = getMaxValue(props.data.datasets);

  return (
    <div className={`chart ${props.horizontal && 'chart--horizontal'} ${props.className ?? ''}`}>
      <Legend datasets={props.data.datasets} />

      <div
        className={`
                chart__groups 
                ${props.wrap && 'chart__groups--wrap'}
                ${props.horizontal && 'chart__groups--horizontal'}
                `}
      >
        {props.data.labels.map((label, index) => {
          return (
            <BarGroup
              barGap={props.barGap!}
              barWidth={props.barWidth!}
              data={props.data}
              horizontal={props.horizontal}
              key={label}
              labelIndex={index}
              maxSVGHeight={props.maxMainAxisLength!}
              maxValue={maxValue}
              showValues={props.showValues!}
            />
          );
        })}
      </div>
    </div>
  );
};

/**
 * Свойства по умолчанию
 */
Chart.defaultProps = {
  barGap: 20,
  barWidth: 50,
  maxMainAxisLength: 600,
  showValues: false,
};

export default Chart;
