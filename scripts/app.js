// DOM queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");

// adding a new chat
newChatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatroom
        .addChat(message)
        .then(() => newChatForm.reset())
        .catch((err) => console.log(err));
});

// class instances
const chatroom = new Chatroom("education", "suzy");
const chatui = new ChatUI(chatList);

// get chats & render
chatroom.getChats((data) => chatui.render(data));
