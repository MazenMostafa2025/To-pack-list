***Travel Packing List React App***

This project is a React-based travel packing list application that helps users manage their packing items efficiently.
Features

• Add items to the packing list with specified quantities
• Mark items as packed
• Remove items from the list
• Sort items based on different criteria
• State management using React hooks
• State lifting for shared state between components
• Statistics for how many items were packed from the total items

***Installation***

Clone the repository:
Copy git clone https://github.com/mazenMostafa2025/To-pack-list.git

Navigate to the project directory:
Copy cd travel-packing-list

Install dependencies:
Copy npm install

Start the development server:
Copy npm start


***Usage***

• Adding an item: Enter the item name and quantity in the input fields and click "Add".
• Marking as packed: Click the checkbox next to an item to mark it as packed.
• Removing an item: Click the delete button next to an item to remove it from the list.
• Sorting items: Use the sort dropdown to sort items by different criteria (e.g., alphabetically, by packed status).

***Component Structure***

• App: Main component that manages the overall state
• Logo: Just the logo of the website
• Form: Handles adding new items to the list
• ItemsList: Displays the list of items and manages sorting
• Item: Represents individual items in the list
• Statistics: Represents how many items were packed

***State Management***

React hooks (useState) are used for local state management
State lifting is implemented to share state between components
