// import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


function Chart() {
    return (
        <Bar

        data={{
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            datasets: [{
                label: '',
                data: [122, 300, 110, 200, 103, 250, 160, 130, 310, 100, 190, 120, 260],
                barThickness: 12,
            },
            {
                type: 'line',
                labels: '',
                data: [230, 142, 227, 103, 216, 142, 227, 103],
            }
            ]
        }}
        width={null}
        height={null}
        options={{
            aspectRatio: 1,
        }}


    >


    </Bar>
    )
}

export default Chart
