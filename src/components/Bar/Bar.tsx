import React from 'react';
import { BarProps } from './BarProps';

import './Bar.css';

/**
 * Компонент Столбец диаграммы
 */
const Bar = (props: BarProps) => {
  // текст размещаем на 5px выше границы столбца
  const yPointText = props.yPoint - 5;

  return (
    <>
      <rect
        className="bar"
        fill={props.color}
        height={props.height}
        width={props.width}
        x={props.xPoint}
        y={props.yPoint}
      >
        <title>{props.value}</title>
      </rect>

      {props.showValues && (
        <text x={props.xPoint} y={yPointText}>
          {props.value}
        </text>
      )}
    </>
  );
};

export default Bar;
