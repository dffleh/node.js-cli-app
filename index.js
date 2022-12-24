const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const argv = require("yargs").argv;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // ввод из стандартного потока
  output: process.stdout, // вывод в стандартный поток
});

async function invokeAction({ action, id, name, email, phone }) {
  rl.question("choice action: ", (action) => {
    switch (action) {
      case "list":
        listContacts();
        break;

      case "get":
        getContactById(id);
        break;

      case "add":
        addContact(name, email, phone);
        break;

      case "remove":
        removeContact(id);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  });
}

invokeAction(argv);
