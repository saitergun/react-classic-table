import React from 'react';
import classNames from 'classnames';

import { ITableBodyColumn } from '../types';

const TableBodyColumn: React.FunctionComponent<ITableBodyColumn> = React.memo(({ value, alignment }) => {
  return (
    <td className="rct--body-column">
      <div
        className={classNames('rct--body-value', {
          'align-center': alignment === 'center',
          'align-end': alignment === 'end',
        })}
      >
        {value}
      </div>
    </td>
  );
});

export default TableBodyColumn;
