const OrganizationsInfo = [
    { id: '1', title: 'Organization Name', paragraph: 'wizSuite Corporation' },
    { id: '2', title: 'Customer Id', paragraph: '#1234' },
    { id: '3', title: 'Organization URL', paragraph: 'wizSuite.com' },
    { id: '4', title: 'GST', paragraph: 'BNDFGH2345578' },
    { id: '5', title: 'Address', paragraph: 'address line1, address line 2, Noida, Uttar Pradesh, 123456' },
];

const ContactInfo = [
    { id: '1', title: 'Name', paragraph: 'Nisha Singh' },
    { id: '2', title: 'Email Address', paragraph: 'nisha@vmstechs.com' },
    { id: '3', title: 'Phone Number', paragraph: '9898989898' },
    { id: '4', title: 'Role in Organization', paragraph: 'Software Developer' },
];

const BillingInfo = [
    { id: '2', title: 'Billing Address', paragraph: '919 Cruickshank Route Apt. 645 254 Wilkinson Curve Suite 432 Kirlinborough Colorado 595-777 Vietnam' },
    { id: '3', title: 'Tax Details', pan: 'PAN: 123456789', gst: 'GST: JBUYVRGVH13235476488' },
    { id: '4', title: 'Contact Details', contactname: 'Jhon Doe', phone: '(+91)098-656-354', email: 'billing@xyz.com' },
];

const BasicInfoTab = () => {
    return (
        <>
            <div className="w-full mt-5 p-4 bg-white dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <h2 className="text-primary font-bold mb-3">Organizations Information</h2>
                <div className="flex justify-between flex-wrap">
                    {OrganizationsInfo.map((ele, item) => {
                        return (
                            <div className="my-2 ">
                                <h3>{ele.title}</h3>
                                <p className="text-customtext text-base">{ele.paragraph}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

            <div className="w-full mt-5 p-4 bg-white dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <h2 className="text-primary font-bold mb-3">Contact Person Information</h2>
                <div className="flex justify-between flex-wrap">
                    {ContactInfo.map((ele, item) => {
                        return (
                            <div className="my-2 ">
                                <h3>{ele.title}</h3>
                                <p className="text-customtext text-base">{ele.paragraph}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

            <div className="w-full mt-5 p-4 bg-white dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <h2 className="text-primary font-bold mb-3">Billing Information</h2>
                <div className="flex justify-between flex-wrap">
                    {BillingInfo.map((ele, item) => {
                        return (
                            <div className="my-2 ">
                                <h3>{ele.title}</h3>
                                <p className="text-customtext text-base text-wrap w-50">{ele.paragraph}</p>
                                <p className="text-customtext text-base">{ele.pan}</p>
                                <p className="text-customtext text-base">{ele.gst}</p>
                                <p className="text-customtext text-base">{ele.contactname}</p>
                                <p className="text-customtext text-base">{ele.phone}</p>
                                <p className="text-customtext text-base">{ele.email}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default BasicInfoTab;