export interface PaginationInterface {
  count?: number;
  items?: [];
  nextPage?: number | null;
  page?: number;
  previousPage?: number;
  showingFrom?: number;
  showingTo?: number;
  totalPages?: number;
}

