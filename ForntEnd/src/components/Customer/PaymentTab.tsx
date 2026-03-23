import PaymentHistoryTable from "../Tables/PaymentHistoryTable"

const paymentInfo = [
    { title: 'Last Payment', datetitle: 'Date & Time', date: '14 Feb, 2025; 12:00am', amounttitle: 'Amount', amount: '1234.00' },
    { title: 'Upcoming Payment', datetitle: 'Due Date', date: '14 Feb, 2025', amounttitle: 'Amount', amount: '1234.00' }
]

const PaymentTab = () => {
    return (
        <>
            <div className="w-full mt-5 p-4 bg-white dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <PaymentHistoryTable/>
            </div>
        </>
    )
}

export default PaymentTab