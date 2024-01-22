// DOM queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMsg = document.querySelector(".update-msg");
const rooms = document.querySelector(".chat-rooms");

// adding new name
newNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    // updating name using Chatroom class
    chatroom.updateName(newName);
    // clear input field
    newNameForm.reset();
    // display updated name message
    updateMsg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => (updateMsg.innerText = ""), 3000);
});

// adding a new chat
newChatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatroom
        .addChat(message)
        .then(() => newChatForm.reset())
        .catch((err) => console.log(err));
});

// update chatroom
rooms.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        // clear list of chats when room changes
        chatui.clear();
        chatroom.updateRoom(e.target.getAttribute("id"));
        chatroom.getChats((chat) => chatui.render(chat));
    }
});

// check local storage for a name
const username = localStorage.username ? localStorage.username : "anonymous";

// class instances
const chatroom = new Chatroom("education", username);
const chatui = new ChatUI(chatList);

// get chats & render
chatroom.getChats((data) => chatui.render(data));
