import './Analytics..css'
import analy from '../../assets/analy.png'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BsClockHistory } from 'react-icons/bs'
import { CgShapeZigzag } from 'react-icons/cg'
import { MdCelebration } from 'react-icons/md'
import Card from '../../components/card/Card'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import Chart from '../../components/chart/Chart'



function Analytics() {
    return (
        <div className='analytics'>
            <h1 className='analytics__header'> Analysis</h1>
            <div className="analytics__body">
                <h1 className="body">
                    <p className='body__header1'> Unikit </p>
                    <p className="body__header2"> Multi Application</p>

                </h1>
                <p className='body__description'>
                    We design clean and high qualiity web application
                </p>

                <button className="body__btn">
                    Buy Now
                </button>

                <div className="analytics__img">
                    <img src={analy} alt="" className="analytics__img__img" />
                </div>
            </div>
            <Card icon={<AiOutlineUsergroupAdd size='50' color='rgb(12, 12, 62)' />} value='25000' text='Sessions' />
            <Card icon={<BsClockHistory size='50' color='rgb(12, 12, 62)' />} value='00:18' text='Avg. Sessions' />
            <Card icon={<CgShapeZigzag size='50' color='rgb(12, 12, 62)' />} value='$2400' text='Bounce Rate' />
            <Card icon={<MdCelebration size='50' color='rgb(12, 12, 62)' />} value='85000' text='Goals Completed' />
            <div className="audience">
                <div className="audience__header">
                    <h1 className='audience__desc'>
                        Audience Overview
                    </h1>
                    <p className='audience__date'> This year</p>
                </div>
                <div className="audience__chart">
                    <Chart />
                </div>

            </div>

            <div className="browser__table">
                <div className="table__header">
                    <h1 className='table__desc'>
                        Browser Used &#38; Traffic Report
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Analytics
