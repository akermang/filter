import React from "react";
import propTypes from "prop-types";
import { translate } from "react-i18next";
import styles from "./home.page.scss";
import FilterComponent from "../../components/filter/filter.component.jsx";
import { List, MenuItem } from "@material-ui/core";

const mockData = [{g:"a",name: "gal" }, { name: "ssss",g:"a" }, { name: "gil" }];

const HomePage = ({ t }) => (
  <div className={styles.homePage}>
    {t("HOME_PAGE")}

    <FilterComponent list={mockData}>
      {filtered => {
        return (
          <List>{filtered.map(item => <MenuItem key={item.name}>{item.name}</MenuItem>)}</List>
        );
      }}
    </FilterComponent>
  </div>
);

HomePage.propTypes = {
  t: propTypes.func.isRequired
};

export default translate()(HomePage);
