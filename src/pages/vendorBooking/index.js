import React, { useState } from "react";
import "./vendorBooking.scss";

import serviceIcon from "./../../assets/dashboard/serviceIconGreen.svg";
import rupeeIcon from "./../../assets/service_page/rupee.svg";
import CustomPagination from "../../components/atmoic/customPagination";

const VendorBooking = ({ tableData }) => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  return (
    <>
      <div className="container">
        <div className="row py-4">
          <div className="col-12 custom-dynamic-page__heading-text">{tableData.tableTitle}</div>
        </div>
        {tableData.filters.length > 0 && (
          <div className="row">
            {tableData.filters.map((filterData, index) => (
              <div key={index} className="col-3">
                <div className={`custom-dynamic-page__filter-box ${filterData.active ? "custom-dynamic-page__filter-box_filter-active" : ""}`}>
                  <div className="d-flex align-items-center justify-content-center custom-dynamic-page__filter-box_icon">
                    <img src={serviceIcon} alt="Service Icon" />
                  </div>
                  <div className="mr-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-dynamic-page__filter-box_title">{filterData.title}</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start">
                      <span className="custom-dynamic-page__filter-box_value">{filterData.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="custom-dynamic-page__custom-table row my-3">
          <table className="table custom-dynamic-page__custom-table_table-margin mt-0 mb-0">
            <thead>
              <tr>
                {tableData.records.headers.map((header, index) => (
                  <th key={index} className="custom-dynamic-page__custom-table_header-elements">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.records.data.length === 0 && (
                <tr >
                  <td colSpan={tableData.records.headers.length} className="text-center">No Records Found</td>
                </tr>
              )}
              {tableData.tableName === "orders" && (
                <>
                  {tableData.records.data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize).map((record, index) => (
                    <tr key={index} className={`${index % 2 !== 0 ? "even-row" : null}`}>
                      <td>{index + 1}</td>
                      <td>{record.name}</td>
                      <td>{record.service}</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-start booking-page__custom-table__icons">
                          <img src={rupeeIcon} alt="rupeeIcon" className="mr-2" />
                          {record.amount}
                        </div>
                      </td>
                      <td>{record.date}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="d-flex align-items-center justify-content-end mt-4">
          <CustomPagination records={tableData.records.data} pageSize={pageSize} page={page} setPage={setPage} />
        </div>
      </div>
      {/* <div className="custom-dynamic-page px-3 px-lg-0">
      </div> */}
    </>
  );
};

export default VendorBooking;
