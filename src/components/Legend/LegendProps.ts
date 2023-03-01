import { Dataset } from '../../models';

/**
 * Входящие свойства компонента Легенда диаграммы
 */
export interface LegendProps {
    /**
     * Наборы данных для отображения в диаграмме
     */
    datasets: Dataset[];
}
