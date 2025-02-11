import { Container } from "./styles";

export interface PaginationProps {
  page: number;
  prevFunc: VoidFunction;
  nextFunc: VoidFunction;
}

export function Pagination({ page, prevFunc, nextFunc }: PaginationProps) {
  return (
    <Container page={page}>
      <button className="prevButton" onClick={prevFunc}>
        {page - 1}
      </button>
      <button disabled>{page}</button>
      <button className="nextButton" onClick={nextFunc}>
        {page + 1}
      </button>
    </Container>
  );
}
