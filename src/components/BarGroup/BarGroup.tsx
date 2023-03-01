import React from 'react';
import clsx from 'clsx';
import { Bar } from '../Bar';
import { Dataset } from '../../models';
import { BarGroupProps } from './BarGroupProps';
import { getHeight } from './BarGroupUtils';

import './BarGroup.css';

/**
 * Компонент Группа столбцов диаграммы. Отображает данные в разрезе одного лейбла.
 */
const BarGroup = ({ showValues = false, ...props }: BarGroupProps) => {
  const numberOfBars = props.data.datasets.length;

  // кол-во столбцов умножаем на ширину столбца, плюс учитываем наличие отступа вправо у всех столбцов, кроме последнего
  const svgWidth = numberOfBars * (props.barWidth + props.barGap) - props.barGap;

  const labelClassName = React.useMemo(() => {
    return clsx('bar-group__label', {
      ['bar-group__label--horizontal']: props.horizontal,
    });
  }, [props.horizontal]);

  return (
    <div className="bar-group__container">
      <svg
        viewBox={`0 0 ${svgWidth} ${props.maxSVGHeight}`}
        height="100%"
        width="100%"
        preserveAspectRatio="xMidYMax meet"
      >
        {props.data.datasets.map((dataset: Dataset, index: number) => {
          const barHeight = getHeight(props.maxValue, dataset.values[props.labelIndex], props.maxSVGHeight);

          return (
            <Bar
              color={dataset.color}
              key={dataset.name}
              height={barHeight}
              showValues={showValues}
              value={dataset.values[props.labelIndex]}
              width={props.barWidth}
              xPoint={index * (props.barWidth + props.barGap)}
              yPoint={props.maxSVGHeight - barHeight}
            />
          );
        })}
      </svg>

      <div className={labelClassName}>{props.data.labels[props.labelIndex]}</div>
    </div>
  );
};

export default BarGroup;
