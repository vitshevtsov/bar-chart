import { Dataset } from '../../models';

/**
 * Функция получения максимального значения среди всех наборов данных типа Dataset[]
 * @param datasets - наборы данных
 * @returns максимальное значение
 */
export const getMaxValue = (datasets: Dataset[]) => {
    let result = 0;

    datasets.forEach((dataset) => {
        const maxDatasetValue = Math.max(...dataset.values);

        if (maxDatasetValue > result) {
            result = maxDatasetValue;
        }
    });

    return result;
};
