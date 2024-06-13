import React from "react";
import TdCell from "../../atoms/TdCell";
import ThCell from "../../atoms/ThCell";
import { Tr } from './Tr.styles';

const TRow = ({ columns, row }) => {
    return (
        <Tr>
            {row
                ? columns.map((column, index) =>
                    <TdCell key={index}>{row[column]}</TdCell>
                )
                : columns.map((column, index) =>
                    <ThCell key={index}>{column}</ThCell>
                )}
        </Tr>
    );
}

export default TRow;