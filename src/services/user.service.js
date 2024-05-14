const USER_KEY = 'user'

export const userService = {
  getUser,
  transferFunds,
  getTransactions,
}

function getUser() {
  const user = JSON.parse(localStorage.getItem(USER_KEY))
  if (!user) {
    // Initialize user if not found in localStorage
    const newUser = {
      name: 'Puki Ben David',
      balance: 100,
      transactions: [],
    }
    localStorage.setItem(USER_KEY, JSON.stringify(newUser))
    return newUser
  }
  return user
}

function transferFunds(toId, amount) {
  // Logic to transfer funds
  const user = getUser()
  if (user.balance >= amount) {
    // Deduct amount from user's balance
    user.balance -= amount
    // Add transaction
    user.transactions.push({
      toId,
      to: 'Moshiko', // Example value
      at: formatDate(new Date()), // Convert timestamp to "dd/mm/yyyy" format
      amount,
    })
    // Save updated user to localStorage
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  } else {
    console.error('Insufficient balance')
  }
}

function getTransactions() {
  const user = getUser()
  return user.transactions
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}