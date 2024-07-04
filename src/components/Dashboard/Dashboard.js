import React from "react";
import Calendar from "calendar-reactjs";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  let navigate = useNavigate();

  return (<>
    <div className='d-flex justify-content-around'>
      <div>
        <button onClick={() => navigate(`/reducerV`)}>Reducer</button>
      </div>
      <div>
        <button onClick={() => navigate(`/fileUpload`)}>File</button>
      </div>
    </div>

    <Calendar
      onCellClick={(val) => console.log(val)}
      header={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      }}

      month={
        {
          date: "2021-05-13",
          days: [
            { date: "2021-05-01", status: "vacation" },
            { date: "2021-05-02", status: "vacation" },
            { date: "2021-05-03", status: "present" },
            { date: "2021-05-04", status: "present" },
            { date: "2021-05-05", status: "present" },
            { date: "2021-05-06", status: "present" },
            { date: "2021-05-07", status: "present" },
            { date: "2021-05-08", status: "vacation" },
            { date: "2021-05-09", status: "vacation" },
            { date: "2021-05-10", status: "present" },
            { date: "2021-05-11", status: "present" },
            { date: "2021-05-12", status: "present" },
            { date: "2021-05-13", status: "present" },
            { date: "2021-05-14", status: "present" },
            { date: "2021-05-15", status: "vacation" },
            { date: "2021-05-16", status: "vacation" },
            { date: "2021-05-17", status: "absent" },
            { date: "2021-05-18", status: "leave" },
            { date: "2021-05-19", status: "leave" },
            { date: "2021-05-20", status: "leave" },
            { date: "2021-05-21", status: "leave" },
            { date: "2021-05-22", status: "vacation" },
            { date: "2021-05-23", status: "vacation" },
            { date: "2021-05-24", status: "present" },
            { date: "2021-05-25", status: "present" },
            { date: "2021-05-26", status: "present" },
            { date: "2021-05-27", status: "present" },
            { date: "2021-05-28", status: "present" },
            { date: "2021-05-29", status: "vacation" },
            { date: "2021-05-30", status: "vacation" },
            { date: "2021-05-31", status: "present" }
          ]
        }, {
          date: "2021-06-13",
          days: [
            { date: "2021-06-01", status: "vacation" },
            { date: "2021-06-02", status: "vacation" },
            { date: "2021-06-03", status: "present" },
            { date: "2021-06-04", status: "present" },
            { date: "2021-06-05", status: "present" },
            { date: "2021-06-06", status: "present" },
            { date: "2021-06-07", status: "present" },
            { date: "2021-06-08", status: "vacation" },
            { date: "2021-06-09", status: "vacation" },
            { date: "2021-06-10", status: "present" },
            { date: "2021-06-11", status: "present" },
            { date: "2021-06-12", status: "present" },
            { date: "2021-06-13", status: "present" },
            { date: "2021-06-14", status: "present" },
            { date: "2021-06-15", status: "vacation" },
            { date: "2021-06-16", status: "vacation" },
            { date: "2021-06-17", status: "absent" },
            { date: "2021-06-18", status: "leave" },
            { date: "2021-06-19", status: "leave" },
            { date: "2021-06-20", status: "leave" },
            { date: "2021-06-21", status: "leave" },
            { date: "2021-06-22", status: "vacation" },
            { date: "2021-06-23", status: "vacation" },
            { date: "2021-06-24", status: "present" },
            { date: "2021-06-25", status: "present" },
            { date: "2021-06-26", status: "present" },
            { date: "2021-06-27", status: "present" },
            { date: "2021-06-28", status: "present" },
            { date: "2021-06-29", status: "vacation" },
            { date: "2021-06-30", status: "vacation" }
          ]
        }}
      emptyCellStyle={{ backgroundColor: "white" }}
      status={{
        present: {
          labelStyle: {
            backgroundColor: "green",
            color: "black",
            borderRadius: "8px",
            padding: "0px 0px 3px 0px"
          }
        },
        absent: {
          labelStyle: {
            backgroundColor: "red",
            color: "black",
            borderRadius: "8px",
            padding: "0px 0px 3px 0px"
          }
        },
        vacation: {
          labelStyle: {
            backgroundColor: "yellow",
            color: "black",
            borderRadius: "8px",
            padding: "0px 0px 3px 0px"
          }
        },
        leave: {
          labelStyle: {
            backgroundColor: "orange",
            color: "black",
            borderRadius: "8px",
            padding: "0px 0px 3px 0px"
          }
        }
      }}
    />
  </>
  );
};
