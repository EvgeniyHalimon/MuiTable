import { HeadCell } from "./types";

const convertUpperCase = (str : string) : string => {
    return str.toUpperCase()
}

export const headCells: readonly HeadCell[] = [
    {
      id: 'jobNumber',
      numeric: false,
      disablePadding: true,
      label: `${convertUpperCase('job number')}`,
    },
    {
      id: 'customer',
      numeric: false,
      disablePadding: false,
      label: `${convertUpperCase('customer')}`,
    },
    {
      id: 'location',
      numeric: true,
      disablePadding: false,
      label: `${convertUpperCase('location')}`,
    },
    {
      id: 'salesRep',
      numeric: false,
      disablePadding: false,
      label: `${convertUpperCase('sales rep')}`,
    },
    {
      id: 'startDate',
      numeric: false,
      disablePadding: false,
      label: `${convertUpperCase('start date')}`,
    },
    {
      id: 'endDate',
      numeric: false,
      disablePadding: false,
      label: `${convertUpperCase('end date')}`,
    },
    {
      id: 'invoiceNumber',
      numeric: true,
      disablePadding: false,
      label: `${convertUpperCase('invoice №')}`,
    },
    {
      id: 'invoiceTotal',
      numeric: true,
      disablePadding: false,
      label: `${convertUpperCase('invoice total')}`,
    },
    {
      id: 'POAmount',
      numeric: true,
      disablePadding: false,
      label: `${convertUpperCase('po amount')}`,
    },
    {
      id: 'totalJobSpend',
      numeric: true,
      disablePadding: false,
      label: `${convertUpperCase('total job spend')}`,
    },
    {
      id: 'totalPOSpend',
      numeric: true,
      disablePadding: false,
      label: `${convertUpperCase('total po spend')}`,
    },
    {
      id: 'lastComment',
      numeric: true,
      disablePadding: false,
      label: `${convertUpperCase('last comment')}`,
    },
    {
      id: 'lastUpdated',
      numeric: true,
      disablePadding: false,
      label: `${convertUpperCase('lasr updated')}`,
    }
  ];