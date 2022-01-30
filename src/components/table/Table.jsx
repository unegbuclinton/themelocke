import DataTable from 'react-data-table-component'

function Table() {

    const customStyles ={
        rows :{
            style :{
      
            }
        },
        headCells:{
            style :{
                background : '#06102C',
                color : '#fff'
            }
        },
        cells:{
            style :{
            
            
            }
        }

    }

    const columns = [

        {
            name: 'Browser',
            selector: row => row.browser,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Session',
            selector: row => row.session,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Bounce Rate',
            selector: row => row.bounceRate,
            sortable: true,
            filterable: true,

        },
        {
            name: 'Transaction',
            selector: row => row.transaction,
            sortable: true,
            filterable: true,

        }
    ]

    const data = [
        {
            id: 1,
            title: {},
            session: '15 minutes',
            bounceRate: 7,
            Transaction : 10,
        },
        {
            id: 1,
            title: 'Google Chrome',
            session: '15 minutes',
            bounceRate: 7,
            Transaction : 10,
        },
        {
            id: 3,
            title: 'Yash Patel',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 4,
            title: 'Christ mercy',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 5,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 6,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 7,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 8,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 9,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
      
    ]



    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
              
                
            />
        </>
    )
}

export default Table
