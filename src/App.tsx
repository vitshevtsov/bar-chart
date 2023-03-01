import React from 'react';
import { Chart } from './components';
import { Data } from './models';

function App() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    // тестовый набор данных с группировкой по лейблам (в данном случае - по месяцам)
    const multiLabelsData: Data = {
        labels,
        datasets: [
            {
                name: 'Продано смартфонов, шт.',
                values: [4444, 4444, 4445, 8444, 5444, 5444, 414],
                color: 'rgb(255, 99, 132)',
            },
            {
                name: 'Продано планшетов, шт.',
                values: [4410, 4449, 9444, 7444, 6444, 5444, 4444],
                color: 'rgb(53, 162, 235)',
            },
            {
                name: 'Продано чайных ситечек, шт.',
                values: [1444, 2444, 2444, 344, 4444, 5444, 2444],
                color: 'rgb(53, 255, 162)',
            },
        ],
    };

    // тестовый набор данных без группировки по лейблам
    const singleLabelData: Data = {
        labels: ['2022'],
        datasets: [
            {
                name: 'Продано смартфонов, шт.',
                values: [4444],
                color: 'rgb(255, 99, 132)',
            },
            {
                name: 'Продано планшетов, шт.',
                values: [7444],
                color: 'rgb(53, 162, 235)',
            },
            {
                name: 'Продано чайных ситечек, шт.',
                values: [2444],
                color: 'rgb(53, 255, 162)',
            },
        ],
    };

    return (
        <>
            <div
                style={{
                    width: 1200,
                    height: '100%',
                    margin: 'auto',
                    padding: '50px',
                }}
            >
                <h2>Пример с отображаемыми значениями, без переноса сгруппированных столбцов</h2>

                <Chart data={multiLabelsData} maxMainAxisLength={300} showValues />
            </div>

            <hr />

            <div
                style={{
                    width: 1200,
                    height: '100%',
                    margin: 'auto',
                    padding: '50px',
                }}
            >
                <h2>
                    Пример без отображаемых значений (можно посмотреть наведением мыши), с переносом сгруппированных
                    столбцов
                </h2>

                <Chart data={multiLabelsData} maxMainAxisLength={300} wrap />
            </div>

            <hr />

            <div
                style={{
                    width: 1200,
                    margin: 'auto',
                    padding: '50px',
                }}
            >
                <h2>Пример горизонтального режима без отображаемых значений (можно посмотреть наведением мыши)</h2>
                <Chart data={multiLabelsData} maxMainAxisLength={1300} horizontal />
            </div>

            <hr />

            <div
                style={{
                    width: 400,
                    margin: 'auto',
                    padding: '50px',
                }}
            >
                <h2>Пример данных, не сгруппированных по лейблам</h2>
                <Chart data={singleLabelData} maxMainAxisLength={200} />
            </div>
        </>
    );
}

export default App;
