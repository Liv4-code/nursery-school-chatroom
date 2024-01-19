// Adding new chat docs
// Set up real-time listener to get new chats
// Updating the username
// Updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection("chats");
    }
    async addChat(message) {
        // format the chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now),
        };
        // save chat doc
        const response = await this.chats.add(chat);
        return response;
    }
}

const chatroom = new Chatroom("education", "suzy");
chatroom
    .addChat("HI THERE!")
    .then(() => console.log("chat added"))
    .catch((err) => console.log(err));
