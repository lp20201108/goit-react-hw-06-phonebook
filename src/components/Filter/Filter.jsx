import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions";

const Filter = ({ filter, handleChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        name="filter"
        type="text"
        placeholder="search contact"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
