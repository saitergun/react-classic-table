import React from 'react';
import classNames from 'classnames';

import { ITableHeadColumnProps } from '../types';

const TableHeadColumn: React.FunctionComponent<ITableHeadColumnProps> = ({ column }) => {
  return (
    <th
      key={column.key}
      className="rct--head-column"
    >
      <div
        className={classNames('rct--head-value', {
          'align-start': column.alignment === 'start',
          'align-center': column.alignment === 'center',
          'align-end': column.alignment === 'end',
        })}
      >
        {column.title}
      </div>
    </th>
  );
};

export default TableHeadColumn;
