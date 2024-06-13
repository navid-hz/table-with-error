import React from "react";
import useErrorBoundary from "../../../hooks/useErrorBoundary";
import { TableStyled } from './Table.styles';
import Tr from "../../molecules/Tr";

const Table = ({ data }) => {
    const hasError = useErrorBoundary();

    if (hasError) {
        return <h1>Something went wrong</h1>;
    }

    if (!data || data.length) {
        return <h3>No Data</h3>
    }

    const columns = Object.keys(data[0]);

    return (
        <TableStyled>
            <thead>
                <Tr columns={columns} />
            </thead>
            <tbody>
                {data.map((row, index) =>
                    <Tr key={index} columns={columns} row={row} />
                )}
            </tbody>
        </TableStyled>
    );
}

export default Table;