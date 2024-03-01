class SplitWiseApp {
    constructor() {
      this.users = [];
      this.expenses = [];
    }
  
    // Function to add a new user
    addUser(userName) {
      const newUser = {
        id: this.users.length + 1,
        name: userName,
      };
  
      this.users.push(newUser);
      console.log(`User ${userName} added successfully.`);
      return newUser;
    }
  
    // Function to add a new expense
    addExpense(paidByUserId, amount, description, participants) {
      const paidByUser = this.users.find((user) => user.id === paidByUserId);
  
      if (!paidByUser) {
        console.log(`Error: User with ID ${paidByUserId} not found.`);
        return;
      }
  
      const newExpense = {
        id: this.expenses.length + 1,
        paidBy: paidByUser,
        amount,
        description,
        participants: participants.map((participantId) =>
          this.users.find((user) => user.id === participantId)
        ),
      };
  
      this.expenses.push(newExpense);
      console.log('Expense added successfully.');
      return newExpense;
    }
  }
  
  // Example Usage:
  const splitWise = new SplitWiseApp();
  
  // Adding users
  const user1 = splitWise.addUser('Alice');
  const user2 = splitWise.addUser('Bob');
  
  // Adding expenses
  splitWise.addExpense(user1.id, 50, 'Dinner', [user1.id, user2.id]);
  splitWise.addExpense(user2.id, 30, 'Groceries', [user1.id, user2.id]);
  