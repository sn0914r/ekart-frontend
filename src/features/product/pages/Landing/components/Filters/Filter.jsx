import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

import * as S from "./Filter.style";

import { PRICE, SORT, CATEGORY_OPTIONS } from "@constants/filters";

const Filter = ({ updateFilters, filters = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ABS_MIN = PRICE.MIN;
  const ABS_MAX = PRICE.MAX;
  const MIN_GAP = PRICE.STEP;

  const {
    minPrice = "",
    maxPrice = "",
    sort = SORT.LATEST,
    category = "",
  } = filters;

  const sortOptions = [
    { value: SORT.LATEST, label: "Latest Arrivals" },
    { value: SORT.PRICE_DESC, label: "Price: High to Low" },
    { value: SORT.PRICE_ASC, label: "Price: Low to High" },
  ];

  const getPercent = (value) =>
    Math.round(((value - ABS_MIN) / (ABS_MAX - ABS_MIN)) * 100);

  const minVal = minPrice === "" ? ABS_MIN : Number(minPrice);
  const maxVal = maxPrice === "" ? ABS_MAX : Number(maxPrice);

  const handleSortChange = (e) => {
    updateFilters({ sort: e.target.value });
  };

  const handleCategoryChange = (e) => {
    updateFilters({ category: e.target.value });
  };

  const handleMinChange = (e) => {
    const value = Math.max(Number(e.target.value), ABS_MIN);
    if (value <= maxVal - MIN_GAP) {
      updateFilters({ minPrice: value });
    }
  };

  const handleMaxChange = (e) => {
    const value = Math.min(Number(e.target.value), ABS_MAX);
    if (value >= minVal + MIN_GAP) {
      updateFilters({ maxPrice: value });
    }
  };

  // For text inputs
  const handleMinInput = (e) => updateFilters({ minPrice: e.target.value });
  const handleMaxInput = (e) => updateFilters({ maxPrice: e.target.value });

  return (
    <S.FilterWrapper>
      <div className="container">
        <S.FilterHeader className="d-flex justify-content-end">
          <S.ToggleBtn onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <>
                <X size={18} /> Hide Filters
              </>
            ) : (
              <>
                <SlidersHorizontal size={18} /> Filter & Sort
              </>
            )}
          </S.ToggleBtn>
        </S.FilterHeader>

        <S.CollapsibleContent isOpen={isOpen}>
          <div className="row align-items-end g-4">
            {/* Price Range */}
            <div className="col-12 col-md-5">
              <div className="mb-4">
                <S.Label>Price Range</S.Label>
                {/* Slider UI */}
                <S.SliderWrapper>
                  <S.SliderTrack />
                  <S.RangeFill
                    style={{
                      left: `${getPercent(minVal)}%`,
                      width: `${getPercent(maxVal) - getPercent(minVal)}%`,
                    }}
                  />
                  <S.RangeInput
                    type="range"
                    min={ABS_MIN}
                    max={ABS_MAX}
                    value={minVal}
                    onChange={handleMinChange}
                    style={{ zIndex: minVal > ABS_MAX - 100 ? "5" : "3" }}
                  />
                  <S.RangeInput
                    type="range"
                    min={ABS_MIN}
                    max={ABS_MAX}
                    value={maxVal}
                    onChange={handleMaxChange}
                    style={{ zIndex: "4" }}
                  />
                </S.SliderWrapper>
              </div>

              <div className="d-flex align-items-center gap-3">
                <S.FilterGroup className="flex-grow-1">
                  <S.StyledInput
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={handleMinInput}
                    min="0"
                  />
                </S.FilterGroup>
                <div className="text-muted">-</div>
                <S.FilterGroup className="flex-grow-1">
                  <S.StyledInput
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={handleMaxInput}
                    min="0"
                  />
                </S.FilterGroup>
              </div>
            </div>

            {/* Category */}
            <div className="col-12 col-md-4">
              <S.FilterGroup>
                <S.Label>Category</S.Label>
                <S.StyledSelect value={category} onChange={handleCategoryChange}>
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </S.StyledSelect>
              </S.FilterGroup>
            </div>

            {/* Sort By */}
            <div className="col-12 col-md-3">
              <S.FilterGroup>
                <S.Label>Sort By</S.Label>
                <S.StyledSelect value={sort} onChange={handleSortChange}>
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </S.StyledSelect>
              </S.FilterGroup>
            </div>
          </div>
        </S.CollapsibleContent>
      </div>
    </S.FilterWrapper>
  );
};

export default Filter;
