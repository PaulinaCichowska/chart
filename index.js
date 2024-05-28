import { Chart } from 'chart.js/auto'

(async function () {
    const data = [
        { kurs: 300, day: '23-03' },
        { kurs: 100, day: '24-03' },
        { kurs: 260, day: '25-03' },
        { kurs: 230, day: '26-03' },
        { kurs: 300, day: '27-03' },
        { kurs: 315, day: '28-03' },
        { kurs: 195, day: '29-03' },
        { kurs: 250, day: '30-03' },
        { kurs: 332, day: '01-04' },
        { kurs: 325, day: '02-04' },
        { kurs: 140, day: '03-04' },
        { kurs: 320, day: '04-04' },
        { kurs: 250, day: '30-03' },
        { kurs: 332, day: '01-04' },
        { kurs: 325, day: '02-04' },
        { kurs: 100, day: '03-04' },
        { kurs: 320, day: '04-04' },
        { kurs: 123, day: '03-04' },
        { kurs: 320, day: '04-04' },
        { kurs: 260, day: '30-03' },
        { kurs: 350, day: '01-04' },
        { kurs: 325, day: '02-04' },
        { kurs: 160, day: '03-04' },
        { kurs: 320, day: '04-04' },
    ];

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'line',
            data: {
                labels: data.map(row => row.day),
                datasets: [
                    {
                        pointBorderWidth: 0.5,
                        pointBackgroundColor: "rgb(48, 100, 23)",
                        borderWidth: 1,
                        borderColor: 'rgb(48, 100, 23)',
                        label: 'Kurs',
                        data: data.map(row => row.kurs)
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                        // position: 'left',
                        // labels: {
                        //     boxWidth: 0,
                        //     display: false,
                        // },
                    },
                    tooltip: {
                        backgroundColor: 'rgba(100%, 100%, 100%, 0.9)',
                        displayColors: false,
                        borderWidth: 1,
                        bodyColor: 'black',
                        borderColor: 'black',
                        titleColor: 'black',
                        intersect: false,
                    },
                },
                scales: {
                    y: {
                        border: {
                            color: 'black',
                        },
                        grace: '10%',
                        beginAtZero: false,
                        grid: {
                            display: false,
                            drawBorder: true,
                        },
                        ticks: {
                            // stepSize: 50,// co o ile ma sie pokazywać po lewej
                        }
                    },
                    x: {
                        border: {
                            color: 'black',
                            dash: [2, 1],
                        },
                        ticks: {

                            callback: function (tick, index, array) {
                                return (index % 3 === 0) ? this.getLabelForValue(tick) : '';
                                // return (index % 3) ? "" : this.getLabelForValue(tick);
                            }
                        }
                    }
                }
            }
        }
    );
})();
