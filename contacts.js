const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

async function parsedContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  const parsed = await JSON.parse(contacts);
  return parsed;
}

async function listContacts() {
  try {
    console.log(await parsedContacts());
  } catch (error) {
    consol.warn(error);
  }
}

async function getContactById(contactId) {
  const conatacts = await parsedContacts();
  const findContact = conatacts.find((contact) => contact.id === contactId);
  await fs.writeFile(contactsPath, JSON.stringify(findContact, null, 4));
}

function removeContact(contactId) {}

async function addContact(name, email, phone) {
  const id = nanoid();
  const contact = { id, name, email, phone };
  const add = await parsedContacts();
  add.push(contact);

  await fs.writeFile(contactsPath, JSON.stringify(add, null, 4));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
