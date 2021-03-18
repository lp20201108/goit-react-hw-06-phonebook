import { uuid } from "uuidv4";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactsList.module.css";
import { removeContact } from "../../redux/actions";

const ContactsList = ({ visibleContacts, handleRemove }) => {
  if (!visibleContacts.length) {
    return <p className={styles.message}>Phonebook is empty!</p>;
  }
  return (
    <ul className="contactsList">
      {visibleContacts.map(({ id = uuid(), name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleRemove: (id) => dispatch(removeContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
