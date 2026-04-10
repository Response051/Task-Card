# Task-Card

📋 Task Card Component
A single-page, mobile-responsive card designed to display task details, priority levels, and deadlines with built-in action controls.

🏗️ Structure & Selectors
The component uses a specific testing ID for automated quality assurance.

Root Container: <div data-testid="test-todo-card">

🛠️ Key Features
The card is divided into three primary sections: Header, Metadata, and Actions.

1. Task Information
Task Title: Clear, bolded heading for the task.

Task Description: Brief summary or notes regarding the objective.

Categories List: A collection of tags (e.g., "Work," "Personal," "Urgent") to organize tasks visually.

2. Metadata & Indicators
Priority Badge: Color-coded indicator (High, Medium, Low).

Due Date: The specific calendar date for completion.

Time Remaining: A dynamic countdown or "time-left" string (e.g., "2 hours left").

Status Indicator: Visual signal of the current lifecycle stage (e.g., Active, Overdue).

Completion Checkbox: A toggle to mark the task as finished.

3. Interactive Actions
Each card includes optional controls for task management:

Edit Icon/Button: Opens the task editor or enables inline editing.

Delete Icon/Button: Removes the task from the list (triggers confirmation).

📱 Mobile Responsiveness
The card utilizes a fluid layout:

Desktop: Displays metadata (Due Date, Priority) in a horizontal row to save vertical space.

Mobile: Stacked layout for readability; touch-friendly targets for the Edit and Delete buttons.

Flexbox/Grid: Built using a flexible system to ensure the card container scales from 320px to full-width containers.