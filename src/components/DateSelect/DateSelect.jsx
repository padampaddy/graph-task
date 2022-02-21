import React, { useEffect, useRef, useState } from "react";
import InlineDialog from "@atlaskit/inline-dialog";
import "./style.scss";
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEndDate, setStartDate } from "../../redux/slices/dataSlice";

export default function DateSelect() {
  const content = useRef();
  const [open, setOpen] = useState(false);
  const { startDate, endDate } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      content.current.parentElement.style.maxWidth = "max-content";
    }
  }, [open]);

  return (
    <div className="position-relative">
      <InlineDialog
        placement="bottom-end"
        onClose={() => {
          setOpen(false);
        }}
        content={
          <div ref={content}>
            <DateRangePicker
              rangeColors={["#017CF8"]}
              onChange={(item) => {
                dispatch(setStartDate(item.selection.startDate.toISOString()));
                dispatch(setEndDate(item.selection.endDate.toISOString()));
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={[
                {
                  startDate: new Date(startDate),
                  endDate: new Date(endDate),
                  key: "selection",
                },
              ]}
              direction="horizontal"
            />
          </div>
        }
        isOpen={open}
      >
        <div role="button" onClick={() => setOpen((a) => !a)}>
          Select Date
        </div>
      </InlineDialog>
    </div>
  );
}
