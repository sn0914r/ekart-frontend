import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationWrapper, PageButton, Ellipsis } from "./Pagination.styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Always use a fixed sibling count of 1.
  // This yields a max of 7 numbers/ellipses + 2 arrows = 9 blocks.
  // This naturally fits on mobile screens without complex resize logic.
  const siblingCount = 1;

  const generatePages = () => {
    const totalNumbers = siblingCount * 2 + 3; // +3 for first, last, and current
    const totalBlocks = totalNumbers + 2; // +2 for ellipses

    // If we have few pages, just show all of them
    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSiblingIndex > 2;
    const showRightEllipsis = rightSiblingIndex < totalPages - 1;

    // Case 1: Show right ellipsis only
    if (!showLeftEllipsis && showRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "...", totalPages];
    }

    // Case 2: Show left ellipsis only
    if (showLeftEllipsis && !showRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [1, "...", ...rightRange];
    }

    // Case 3: Show both ellipses
    if (showLeftEllipsis && showRightEllipsis) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [1, "...", ...middleRange, "...", totalPages];
    }

    return [];
  };

  if (totalPages <= 1) return null;

  const pages = generatePages();

  return (
    <PaginationWrapper>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </PageButton>

      {pages.map((page, index) => {
        if (page === "...") {
          return <Ellipsis key={index}>...</Ellipsis>;
        }

        return (
          <PageButton
            key={index}
            active={currentPage === page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        );
      })}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={20} />
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
