import React from 'react';

import HeadColumn from './Head_Column';
import BodyRow from './Body_Row';

import { ITableProps } from '../types';

const Table: React.FunctionComponent<ITableProps> = ({ columns, rows, selectedRows, activeRow, onSelectRow }) => {
  return (
    <table className="rct--table">
      <thead>
        <tr>
          {columns.map((column) => (
            <HeadColumn
              key={`${column.key}`}
              column={column}
            />
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => (
          <BodyRow
            key={`${rowIndex}`}
            columns={columns}
            row={row}
            rowIndex={rowIndex}
            selected={selectedRows.indexOf(rowIndex) > -1}
            actived={rowIndex === activeRow}
            onSelectRow={onSelectRow}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
