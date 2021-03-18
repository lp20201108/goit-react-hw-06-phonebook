import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <h1 className="titlePhonebook">Phonebook</h1>
          <ContactForm />
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactsList visibleContacts={this.props.contacts} />
        </div>
      </>
    );
  }
}

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  console.log(filter, items);
  const visibleContacts = getFilteredContacts(items, filter);
  return {
    contacts: visibleContacts,
    filter,
    isContactIncludes: !!items.length,
  };
};

export default connect(mapStateToProps)(App);
