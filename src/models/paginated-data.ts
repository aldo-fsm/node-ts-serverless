export interface PaginatedData<T> {
  total: number;
  currentPage: number;
  lastPage: number;
  pageSize: number,
  data: T[];
}
