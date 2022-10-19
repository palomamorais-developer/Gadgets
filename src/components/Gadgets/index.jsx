import React from "react";
import Card from "../../layout/utilities/Card";
import Icon from "../../layout/utilities/Icon";
import DatasetIcon from "../../assets/dataset.svg";
import CalculatorIcon from "../../assets/calculate.svg";
import "./styles.css";
import ButtonWithTooltip from "../../layout/utilities/ButtonWithTooltip";

const Gadgets = () => {
  return (
    <Card className="gadgets">
      <div className="gadgets__container gadgets__container--top">
        <Icon
          iconProps={{
            src: DatasetIcon,
            alt: "",
            className: "gadgets__icon"
          }}
        />
        <h2 className="gadgets__title">Gadgets</h2>
      </div>
      <div className="gadgets__divider"></div>
      <div className="gadgets__container gadgets__container--bottom">
        <ButtonWithTooltip
          buttonProps={{
            content: (
              <Icon
                iconProps={{
                  src: CalculatorIcon,
                  alt: "",
                  className: "gadgets__icon"
                }}
              />
            ),
            tooltip: {
              text: "Testando tooltip"
            },
            className: "gadgets__button"
          }}
        />
      </div>
    </Card>
  );
};

export default Gadgets;
