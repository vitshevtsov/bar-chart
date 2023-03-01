import React from 'react';
import { Bar } from '../Bar';
import { Dataset } from '../../models';
import { BarGroupProps } from './BarGroupProps';
import { getHeight } from './BarGroupUtils';

import './BarGroup.css';

/**
 * Компонент Группа столбцов диаграммы. Отображает данные в разрезе одного лейбла.
 */
const BarGroup: React.FC<BarGroupProps> = ({
  barGap,
  barWidth,
  data,
  horizontal,
  labelIndex,
  maxSVGHeight,
  maxValue,
  showValues,
}) => {
  const numberOfBars = data.datasets.length;

  // кол-во столбцов умножаем на ширину столбца, плюс учитываем наличие отступа вправо у всех столбцов, кроме последнего
  const svgWidth = numberOfBars * (barWidth + barGap) - barGap;

  return (
    <div className="bar-group__container">
      <svg viewBox={`0 0 ${svgWidth} ${maxSVGHeight}`} height="100%" width="100%" preserveAspectRatio="xMidYMax meet">
        {data.datasets.map((dataset: Dataset, index: number) => {
          const barHeight = getHeight(maxValue, dataset.values[labelIndex], maxSVGHeight);

          return (
            <Bar
              color={dataset.color}
              key={dataset.name}
              height={barHeight}
              showValues={showValues!}
              value={dataset.values[labelIndex]}
              width={barWidth}
              xPoint={index * (barWidth + barGap)}
              yPoint={maxSVGHeight - barHeight}
            />
          );
        })}
      </svg>

      <div className={`bar-group__label ${horizontal && 'bar-group__label--horizontal'}`}>
        {data.labels[labelIndex]}
      </div>
    </div>
  );
};

export default BarGroup;
