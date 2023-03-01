import { Data } from '../../models';

/**
 * Входящие свойства компонента Столбчатая диаграмма
 */
export interface ChartProps {
    /**
     * Ширина отступа между столбцами
     */
    barGap?: number;

    /**
     * Ширина столбца
     */
    barWidth?: number;

    /**
     * Цвет фона
     */
    bgColor?: string;

    /**
     * CSS-класс для дополнительной стилизации
     */
    className?: string;

    /**
     * Данные для отображения в диаграмме
     */
    data: Data;

    /**
     * Флаг отображения диаграммы в горизонтальной плоскости (по умолчанию - в вертикальной)
     */
    horizontal?: boolean;

    /**
     * Максимально допустимая длина основной оси svg-полотна, вдоль которой строятся графики.
     * Иными словами, в вертикальном режиме это максимальная высота графиков,
     * в горизонтальном - их максимальная длина.
     */
    maxMainAxisLength?: number;

    /**
     * Флаг отображения значений рядом со столбцами
     */
    showValues?: boolean;

    /**
     * Флаг переноса групп столбцов на новую строку (по умолчанию - группы не переносятся, контейнер пропорционально уменьшается при ресайзе)
     */
    wrap?: boolean;
}
