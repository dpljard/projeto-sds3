import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sale?page=0&size=10&sort=date,desc`)
            .then(Response => {
                setPage(Response.data)
            });

    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sale</th>
                        <th>Customer Visits</th>
                        <th>Sales closed</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(item => (
                        <tr key={item.id}>
                        <td>{formatLocalDate(item.date,"dd/MM/yyyy")}</td>
                        <td>{item.seller.name}</td>
                        <td>{item.visited}</td>
                        <td>{item.deals}</td>em
                        <td>{item.amount.toFixed(2)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;