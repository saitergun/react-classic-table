export type Alignment = 'start' | 'center' | 'end';

export interface IColumn {
  key: string;

  title: string;

  renderProp: string;

  /**
   * @default 'start'
   */
  alignment?: Alignment;

  render?(value: any, row: any): any;
}

export interface ILibraryProps {
  columns: IColumn[];

  rows: Record<string, unknown>[];

  defaultSelectedRows?: number[];

  onSelectRow?(index: number, indexes: number[]): void;
}

export interface ITableProps {
  columns: IColumn[];

  rows: Record<string, unknown>[];

  selectedRows: number[];

  activeRow: number;

  onSelectRow?(index: number): void;
}

export interface ITableHeadColumnProps {
  column: IColumn;
}

export interface ITableBodyRow {
  columns: IColumn[];

  row: unknown,

  rowIndex: number,

  /**
   * @default false
   */
  selected: boolean,

  /**
   * @default false
   */
  actived: boolean,

  onSelectRow?(index: number): void;
}

export interface ITableBodyColumn {
  /**
   * @default ''
   */
  value: string;

  /**
   * @default 'start'
   */
  alignment: Alignment,
}
