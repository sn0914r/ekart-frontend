import { PaginationContainer, PaginationButton, PaginationEllipsis } from "./Pagination.styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (!totalPages || totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages.map((p, index) => {
      if (p === '...') {
        return <PaginationEllipsis key={`ellipsis-${index}`}>...</PaginationEllipsis>;
      }
      return (
        <PaginationButton
          key={p}
          className="page-btn"
          active={p === currentPage}
          onClick={() => handlePageChange(p)}
          aria-current={p === currentPage ? "page" : undefined}
        >
          {p}
        </PaginationButton>
      );
    });
  };

  return (
    <PaginationContainer aria-label="Pagination">
      <PaginationButton
        className="nav-btn"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        &lt;
      </PaginationButton>
      {renderPageNumbers()}
      <PaginationButton
        className="nav-btn"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label="Next page"
      >
        &gt;
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
