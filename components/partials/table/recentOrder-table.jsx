import React, { useState, useMemo } from "react";
import { recentOrder, recentOrder2 } from "@/constant/table-data";

import Icon from "@/components/ui/Icon";

import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

const COLUMNS = [
  {
    Header: "user",
    accessor: "user",
    Cell: (row) => {
      return (
        <div>
          <div className="flex items-center">
            <div className="flex-1 text-start">
              <h4 className="text-sm font-medium text-slate-600">
                {row?.cell?.value.name}
              </h4>
            </div>
          </div>
        </div>
      );
    },
  },

  {
    Header: "invoice",
    accessor: "invoice",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "price",
    accessor: "price",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "status",
    accessor: "status",
    Cell: (row) => {
      return (
        <span className="block w-full">
          <span
            className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
              row?.cell?.value === "paid"
                ? "text-success-500 bg-success-500"
                : ""
            } 
            ${
              row?.cell?.value === "due"
                ? "text-warning-500 bg-warning-500"
                : ""
            }
            ${
              row?.cell?.value === "cancled"
                ? "text-danger-500 bg-danger-500"
                : ""
            }
                ${
                  row?.cell?.value === "pending"
                    ? "text-danger-500 bg-danger-500"
                    : ""
                } ${
              row?.cell?.value === "shipped"
                ? "text-primary-500 bg-primary-500"
                : ""
            }
            
             `}
          >
            {row?.cell?.value}
          </span>
        </span>
      );
    },
  },
];

const RecentOrderTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => recentOrder2, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    },

    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  return (
    <>
      <div>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table
                className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                {...getTableProps}
              >
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    <th scope="col" className=" table-th ">
                      Exchange Name
                    </th>
                    <th scope="col" className=" table-th ">
                      Net Worth
                    </th>
                    <th scope="col" className=" table-th ">
                      Total Assets
                    </th>
                    <th scope="col" className=" table-th ">
                      Total Debt
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
                  {...getTableBodyProps}
                >
                  {page.map((row) => {
                    prepareRow(row);
                    const { key, ...restRowProps } = row.getRowProps();
                    return (
                      <tr key={key} {...restRowProps}>
                        {row.cells.map((cell) => {
                          const { key, ...restCellProps } = cell.getCellProps();
                          return (
                            <td
                              key={key}
                              {...restCellProps}
                              className="table-td"
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrderTable;
