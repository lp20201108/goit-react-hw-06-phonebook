import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Filter from "./Filter/Filter";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./App.module.css";
import { fecthContacts } from "../redux/operations";

import { getVisibleContacts, getLoading } from "../redux/contacts-selectors";

import Spinner from "./Spinner/Spinner";

class App extends Component {
  componentDidMount() {
    this.props.fecthContacts();
  }

  render() {
    const { contacts, loading } = this.props;
    return (
      <>
        <div className={styles.container}>
          <h1 className="titlePhonebook">Phonebook</h1>
          <ContactForm />
          <h2 className="title">Contacts list</h2>
          {!!contacts.length && <Filter />}
          <ContactsList contacts={this.props.contacts} />
          <Spinner loading={loading} />
          {/* {!contacts.length && (
            <p className={styles.message}>Phonebook is empty!</p>
          )} */}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContacts(state),
    loading: getLoading(state),
  };
};

const mapDispatchToProps = {
  fecthContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
