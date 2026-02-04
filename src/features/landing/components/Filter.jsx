import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import {
  FilterWrapper,
  FilterHeader,
  ToggleBtn,
  CollapsibleContent,
  FilterGroup,
  Label,
  StyledInput,
  StyledSelect,
  SliderWrapper,
  SliderTrack,
  RangeFill,
  RangeInput,
} from "./Filter.style";
import {
  PRICE_CONSTRAINTS,
  SORT_CONSTRAINTS,
} from "../../../constraints/product.constraints";

const Filter = ({ updateFilters, filters = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ABS_MIN = PRICE_CONSTRAINTS.MIN;
  const ABS_MAX = PRICE_CONSTRAINTS.MAX;
  const MIN_GAP = PRICE_CONSTRAINTS.STEP;

  const { minPrice = "", maxPrice = "", sort = "latest" } = filters;

  const sortOptions = [
    { value: SORT_CONSTRAINTS.LATEST, label: "Latest Arrivals" },
    { value: SORT_CONSTRAINTS.PRICE_DESC, label: "Price: High to Low" },
    { value: SORT_CONSTRAINTS.PRICE_ASC, label: "Price: Low to High" },
  ];

  // Helper calculating percentages for the range fill
  const getPercent = (value) =>
    Math.round(((value - ABS_MIN) / (ABS_MAX - ABS_MIN)) * 100);

  const minVal = minPrice === "" ? ABS_MIN : Number(minPrice);
  const maxVal = maxPrice === "" ? ABS_MAX : Number(maxPrice);

  const handleSortChange = (e) => {
    updateFilters({ sort: e.target.value });
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
    <FilterWrapper>
      <div className="container">
        <FilterHeader className="d-flex justify-content-end">
          <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <>
                <X size={18} /> Hide Filters
              </>
            ) : (
              <>
                <SlidersHorizontal size={18} /> Filter & Sort
              </>
            )}
          </ToggleBtn>
        </FilterHeader>

        <CollapsibleContent isOpen={isOpen}>
          <div className="row align-items-end g-5">
            {/* Price Range */}
            <div className="col-12 col-md-6">
              <div className="mb-4">
                <Label>Price Range</Label>
                {/* Slider UI */}
                <SliderWrapper>
                  <SliderTrack />
                  <RangeFill
                    style={{
                      left: `${getPercent(minVal)}%`,
                      width: `${getPercent(maxVal) - getPercent(minVal)}%`,
                    }}
                  />
                  <RangeInput
                    type="range"
                    min={ABS_MIN}
                    max={ABS_MAX}
                    value={minVal}
                    onChange={handleMinChange}
                    style={{ zIndex: minVal > ABS_MAX - 100 ? "5" : "3" }}
                  />
                  <RangeInput
                    type="range"
                    min={ABS_MIN}
                    max={ABS_MAX}
                    value={maxVal}
                    onChange={handleMaxChange}
                    style={{ zIndex: "4" }}
                  />
                </SliderWrapper>
              </div>

              <div className="d-flex align-items-center gap-3">
                <FilterGroup className="flex-grow-1">
                  <StyledInput
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={handleMinInput}
                    min="0"
                  />
                </FilterGroup>
                <div className="text-muted">-</div>
                <FilterGroup className="flex-grow-1">
                  <StyledInput
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={handleMaxInput}
                    min="0"
                  />
                </FilterGroup>
              </div>
            </div>

            {/* Sort By */}
            <div className="col-12 col-md-4 offset-md-2">
              <FilterGroup>
                <Label>Sort By</Label>
                <StyledSelect value={sort} onChange={handleSortChange}>
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </StyledSelect>
              </FilterGroup>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </FilterWrapper>
  );
};

export default Filter;
