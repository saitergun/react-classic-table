import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';

import {
  range as _range,
  clone as _clone,
} from 'lodash';

import './styles/react-classic-table.scss';

import Table from './components/Table';

import { ILibraryProps } from './types';

const Library: React.FunctionComponent<ILibraryProps> = ({ columns, rows, defaultSelectedRows, onSelectRow }) => {
  const [activeRow, setActiveRow] = useState(-1);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [wrapperFocused, setWrapperFocused] = useState(false);

  const wrapperElRef = useRef<HTMLDivElement>(null);

  // set default selected rows
  useLayoutEffect(() => {
    setSelectedRows(defaultSelectedRows ?? []);
  }, []);

  // keydown event
  useEffect(() => {
    const handleWalkKeydown = (e: KeyboardEvent) => {
      const validKeys = [
        'Escape', // 27
        'End', // 35
        'Home', // 36
        'ArrowUp', // 38
        'ArrowDown', // 40
      ];

      if (validKeys.indexOf(e.key) > -1) {
        e.preventDefault();

        // escape
        if (e.key === 'Escape') {
          setActiveRow(-1);

          if (onSelectRow) {
            onSelectRow(-1, []);
          }
        }

        if (e.key === 'End' && rows.length > (activeRow + 1)) {
          setActiveRow(rows.length - 1);
          setSelectedRows([rows.length - 1]);

          if (onSelectRow) {
            onSelectRow(rows.length - 1, [rows.length - 1]);
          }
        }

        if (e.key === 'Home' && activeRow > 0) {
          setActiveRow(0);
          setSelectedRows([0]);

          if (onSelectRow) {
            onSelectRow(0, [0]);
          }
        }

        if (e.key === 'ArrowUp' && activeRow > 0) {
          setActiveRow(activeRow - 1);
          setSelectedRows([activeRow - 1]);

          if (onSelectRow) {
            onSelectRow(activeRow - 1, [activeRow - 1]);
          }
        }

        if (e.key === 'ArrowDown' && rows.length > (activeRow + 1)) {
          setActiveRow(activeRow + 1);
          setSelectedRows([activeRow + 1]);

          if (onSelectRow) {
            onSelectRow(activeRow + 1, [activeRow + 1]);
          }
        }
      }
    };

    if (wrapperFocused) {
      window.addEventListener('keydown', handleWalkKeydown);
    }

    return () => {
      window.removeEventListener('keydown', handleWalkKeydown);
    };
  }, [wrapperFocused, activeRow]);

  // scoll wrapper
  useEffect(() => {
    if (activeRow !== null && activeRow > -1 && rows.length > activeRow) {
      const wrapperEl = wrapperElRef.current;
      const tableHeadRowHeight = wrapperEl.querySelector('thead tr th:first-child')?.clientHeight;
      const tableBodyRowHeight = wrapperEl.querySelector('tbody tr td:first-child')?.clientHeight;

      // seçilen satırın görünen tablodaki üst satır (header) ile arasındaki boşluk
      const distanceTop = (activeRow * tableHeadRowHeight) - wrapperEl.scrollTop;

      // seçilen satırın görünen tablodaki alt sınır ile arasındaki boşluk
      const distanceBottom = wrapperEl.clientHeight - distanceTop - tableBodyRowHeight - tableHeadRowHeight;

      // seçilen satır aşağıda kaldıysa aşağıyı sıfırla
      if (distanceBottom < 0) {
        wrapperEl.scrollTo(wrapperEl.scrollLeft, wrapperEl.scrollTop - distanceBottom);
      }

      // seçilen satır yukarıda kaldıysa yukarıyı sıfırla
      if (distanceTop < 0) {
        wrapperEl.scrollTo(wrapperEl.scrollLeft, wrapperEl.scrollTop + distanceTop);
      }
    }
  }, [activeRow]);

  const handleSelectBodyRow = useCallback((index: number) => {
    const event = window.event as KeyboardEvent;
    const { shiftKey, ctrlKey } = event;

    if (shiftKey) {
      let selectedRowsNext = [];

      if (activeRow > index) {
        selectedRowsNext = _range(index, activeRow + 1);
      } else {
        selectedRowsNext = _range(activeRow, index + 1);
      }

      setSelectedRows(selectedRowsNext);

      if (onSelectRow) {
        onSelectRow(index, selectedRowsNext);
      }
    }

    else if (ctrlKey) {
      const selectedRowsNext = _clone(selectedRows);

      if (ctrlKey && selectedRowsNext.indexOf(index) > -1) {
        selectedRowsNext.splice(selectedRowsNext.indexOf(index), 1);
      } else {
        selectedRowsNext.push(index);
      }

      setActiveRow(index);
      setSelectedRows(selectedRowsNext);

      if (onSelectRow) {
        onSelectRow(index, selectedRowsNext);
      }
    }

    else {
      setActiveRow(index);
      setSelectedRows([index]);

      if (onSelectRow) {
        onSelectRow(index, [index]);
      }
    }
  }, [selectedRows]);

  return (
    <div
      className="rct--table-wrapper"
      tabIndex={-1}
      onFocus={() => setWrapperFocused(true)}
      onBlur={() => setWrapperFocused(false)}
      ref={wrapperElRef}
    >
      <Table
        columns={columns}
        rows={rows}
        selectedRows={selectedRows}
        activeRow={activeRow}
        onSelectRow={handleSelectBodyRow}
      />
    </div>
  );
};

export default Library;
