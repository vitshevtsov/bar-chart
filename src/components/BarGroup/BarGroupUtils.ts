/**
 * Функция вычисляет высоту столбца, исходя из пропорции между максимальным и текущим значением.
 * @param maxValue - максимальное значение всей выборки
 * @param currentValue - текущее значение
 * @param maxSVGHeight - макс. высота svg-полотна
 * @returns
 */
export const getHeight = (maxValue: number, currentValue: number, maxSVGHeight: number) => {
    const height = (currentValue / maxValue) * maxSVGHeight;

    // Из вычисленной высоты отнимаем 40, чтобы максимальные по высоте столбцы умещались на полотне вместе со значениями над ними.
    // Для малых величин (не более 50) это нецелесообразно - в этом случае, просто возвращаем высоту
    return height > 50 ? height - 40 : height;
};
