const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    const parsedContacts = await JSON.parse(contacts);
    console.log(parsedContacts);
  } catch (error) {
    consol.warn(error);
  }
}

function getContactById(contactId) {}

function removeContact(contactId) {}

function addContact(name, email, phone) {}

module.exports = { listContacts, getContactById, removeContact, addContact };
