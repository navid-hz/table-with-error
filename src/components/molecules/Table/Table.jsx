import React from "react";
import { TableStyled } from './Table.styles';
import Tr from "../../molecules/Tr";

const Table = ({ data }) => {

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