export interface Data {
    jobNumber: string,
    customer: string,
    location: string,
    salesRep: string,
    startDate: string,
    endDate: string,
    invoiceNumber: string,
    invoiceTotal: string,
    POAmount: number,
    totalJobSpend: string,
    totalPOSpend: string,
    lastComment: string,
    lastUpdated: string,
  }
export  type Order = 'asc' | 'desc';

export interface HeadCell {
      disablePadding: boolean;
      id: keyof Data;
      label: string;
      numeric: boolean;
}
  
export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export interface EnhancedTableToolbarProps {
    numSelected: number;
}