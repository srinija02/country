<!-- App.vue -->
<template>
    <div id="app">
    <div class="all">
    <div class="top">
      <img src="data:image/png;base64,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" alt="Vue">
    </div>
    <b>Vue</b>
    <div class="login">Login Name:Srinija,Devi  
    </div>
    </div>
    <div class="add">
      <button @click="showAddContactForm">Add Contact</button>
      </div>
      <div v-if="showForm">
        <form @submit.prevent="addContact">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="newContact.name" required>
  
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" v-model="newContact.phoneNumber" required>
  
          <label for="country">Country:</label>
          <select id="country" v-model="newContact.country">
            <option value="INDIA">INDIA</option>
            <option value="USA">USA</option>
            <option value="EGYPT">EGYPT</option>
            <option value="PAKISTAN">PAKISTAN</option>
          </select>
  
          <button type="submit">{{ editingContact ? 'Update Contact' : 'Save Contact' }}</button>
        </form>
      </div>
     
      <div v-if="contacts.length > 0">
        <h2>Contact List</h2>
        <ul>
          <p v-for="(contact, index) in contacts" :key="index">
            <componentsA :name="contact.name" :phonenumber="contact.phoneNumber" :country="contact.country" />
            {{ contact.name }} - {{ contact.phoneNumber }} - {{ contact.country }}
            <button @click="editContact(index)">Edit</button>
            <button @click="confirmDelete(index)">Delete</button>
          </p>
        </ul>
      </div>
  
      <!-- Modal for confirmation -->
      <div v-if="showConfirmationModal" class="modal">
        <p>Do you want to delete this contact?</p>
        <button @click="deleteConfirmed">Yes</button>
        <button @click="cancelDelete">No</button>
      </div>
  
      <div>
        <SearchComponent @search="handleSearch"></SearchComponent>
        <div v-if="filteredContacts.length > 0">
          <h2>Filtered Contact List</h2>
          
            <li v-for="(contact, index) in filteredContacts" :key="index">
              <div class="details">name:{{ contact.name }} - number:{{ contact.phoneNumber }} - country:{{ contact.country }}</div>
              <button @click="editContact(index)">Edit</button>
              <button @click="confirmDelete(index)">Delete</button>
            </li>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showForm: false,
        editingContact: false,
        editedContactIndex: null,
        newContact: {
          name: '',
          phoneNumber: '',
          country: '',
        },
        contacts: [],
        showConfirmationModal: false,
        contactToDeleteIndex: null,
        filteredContacts: [],
      };
    },
    methods: {
      showAddContactForm() {
        this.showForm = true;
        this.editingContact = false;
        this.clearForm();
      },
      addContact() {
        if (this.editingContact) {
          // Update the existing contact
          this.contacts[this.editedContactIndex] = { ...this.newContact };
        } else {
          // Add the new contact to the contacts array
          this.contacts.push({
            name: this.newContact.name,
            phoneNumber: this.newContact.phoneNumber,
            country: this.newContact.country,
          });
        }
        // Clear the form fields
        this.clearForm();
        // Hide the form
        this.showForm = false;
      },
      editContact(index) {
        // Set the form for editing
        this.showForm = true;
        this.editingContact = true;
        this.editedContactIndex = index;
        this.newContact = { ...this.contacts[index] };
      },
      confirmDelete(index) {
        // Show confirmation modal before deleting
        this.showConfirmationModal = true;
        this.contactToDeleteIndex = index;
      },
      deleteConfirmed() {
        // Remove the contact at the specified index
        this.contacts.splice(this.contactToDeleteIndex, 1);
        this.hideConfirmationModal();
      },
      cancelDelete() {
        // Cancel deletion and hide the confirmation modal
        this.hideConfirmationModal();
      },
      hideConfirmationModal() {
        // Hide the confirmation modal
        this.showConfirmationModal = false;
        this.contactToDeleteIndex = null;
      },
      handleSearch(query) {
        // Filter contacts based on the search query
        this.filteredContacts = this.contacts.filter(contact => {
          return contact.name.toLowerCase().includes(query.toLowerCase());
        });
      },
      clearForm() {
        // Clear the form fields
        this.newContact = {
          name: '',
          phoneNumber: '',
          country: '',
        };
      },
    },
  };
  </script>
  
  <style>
  #app {
    text-align: center;
    margin-top: 2rem;
  }
  
  /* Styles for the modal */
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    z-index: 1000;
  }
  .top img{
    width:20px;
    height: 30px;
    size: 20cm;
  }
  .login{
    top:0px;
    border:2px solid black;
    width:200px;
    height: 20px;
    margin:7px;
    margin-left:1200px
   
  }
  .all{
    display:flex;
    height: 40px;
    border:2px solid;
    width:80%;
    margin-left:10%; 
    margin-right:15%; 
  }
  .add{
    margin-top:30px;
    margin-left: 1100px;
    border-radius: 1px;
  }
  .details{
    border:2px solid;
    height:60px;
    width:200px;
    display: block;
  }
  </style>
