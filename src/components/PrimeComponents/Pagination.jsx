import React, { useState } from 'react';
import { Paginator } from 'primereact/paginator';
import './PaginatorDemo.css';

const PaginatorDemo = () => {
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);
    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    }
    return (
        <div className="paginator-demo">
            <div className="card">
                <Paginator first={basicFirst} rows={basicRows} totalRecords={120}  onPageChange={onBasicPageChange}></Paginator>
            {/*rowsPerPageOptions={[10, 20, 30]}*/}
            </div>
        </div>
    );
}

export default PaginatorDemo