 // Get the containers and success message
 const container1 = document.getElementsByClassName('container')[0];
 const container2 = document.getElementsByClassName('container')[1];
 const successMessage = document.querySelector('.success-message');

 // Add event listeners for drag and drop events
 container1.addEventListener('dragstart', handleDragStart);
 container2.addEventListener('dragover', handleDragOver);
 container2.addEventListener('drop', handleDrop);

 // Store the dragged item and update its appearance
 let draggedItem;
 function handleDragStart(event) {
   draggedItem = event.target;
   event.dataTransfer.setData('text/plain', event.target.innerText);
   event.target.classList.add('dragging');
 }

 // Prevent default behavior to allow drop
 function handleDragOver(event) {
   event.preventDefault();
 }

 // Handle the drop event
 function handleDrop(event) {
   event.preventDefault();
   successMessage.innerText = 'Item dropped successfully!';
   draggedItem.classList.remove('dragging');
   container2.appendChild(draggedItem);
 }