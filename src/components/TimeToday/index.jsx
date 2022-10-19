import React, { useEffect, useState } from "react";
import "./styles.css";
import ScheduleIcon from "./../../assets/schedule.svg";
import Card from "../../layout/utilities/Card";
import Icon from "../../layout/utilities/Icon";

const TimeToday = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 0);
  }, []);

  return (
    <Card className="time">
      <div className="time__subtitle">
        <h4>Hoje,</h4>
        <h4>
          {date.toLocaleDateString("pt-br", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </h4>
      </div>
      <h2 class="time__icon">
        <Icon
          iconProps={{
            src: ScheduleIcon,
            alt: "",
            className: "time__image"
          }}
        />
      </h2>
      <h2 class="time__title">
        {date.toLocaleString("pt-br", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour24: true
        })}
      </h2>
    </Card>
  );
};

export default TimeToday;
