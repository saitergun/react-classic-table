import React, { memo } from 'react';
import classNames from 'classnames';

import {
  result as _result,
} from 'lodash';

import BodyColumn from './Body_Column';

import { ITableBodyRow } from '../types';

const TableBodyRow: React.FunctionComponent<ITableBodyRow> = memo(({ columns, row, rowIndex, selected, actived, onSelectRow }) => {
  return (
    <tr
      className={classNames('rct--body-row', {
        selected,
        actived,
      })}
      onClick={() => {
        onSelectRow(rowIndex);
      }}
    >
      {columns.map((column) => {
        let value: string = _result(row, column.renderProp, '');

        if (column.render !== undefined && typeof column.render === 'function') {
          value = column.render(value, row);
        }

        return (
          <BodyColumn
            key={column.key}
            value={value}
            alignment={column.alignment}
          />
        );
      })}
    </tr>
  );
});

export default TableBodyRow;
