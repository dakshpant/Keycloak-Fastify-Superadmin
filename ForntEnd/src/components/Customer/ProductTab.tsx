import ProductTable from "../Tables/ProductTable"

const ProductTab = () => {
    return (
        <>
            <div className="w-full mt-5 p-4 bg-white dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <h2 className="text-primary font-bold mb-3">Manage Products</h2>
                <ProductTable />
            </div>
        </>
    )
}

export default ProductTab