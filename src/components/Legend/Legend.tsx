import React from 'react';
import { LegendProps } from './LegendProps';

import './Legend.css';

/**
 * Компонент Легенда диаграммы
 */
const Legend: React.FC<LegendProps> = (props) => {
    return (
        <div className="legend">
            {props.datasets.map((dataset) => (
                <label className="legend__item" key={dataset.name}>
                    <div style={{ height: 20, width: 20, backgroundColor: dataset.color }}></div>
                    {dataset.name}
                </label>
            ))}
        </div>
    );
};

export default Legend;
