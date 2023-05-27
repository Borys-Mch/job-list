import { useSelector, useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "store/positions/positionSelectors";
import { selectFilters } from "store/filters/filterSelectors";

import { addFilter } from "store/filters/filterActions";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
