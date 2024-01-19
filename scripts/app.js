// DOM queries
const chatList = document.querySelector(".chat-list");

// class instances
const chatroom = new Chatroom("education", "suzy");
const chatui = new ChatUI(chatList);

// get chats & render
chatroom.getChats((data) => chatui.render(data));
