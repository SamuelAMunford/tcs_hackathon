
export const steps = [
    {
        id: '0',
        message: 'Hello!',
        trigger: '1'
    }, {
        id: '1',
        // This message appears in
        // the bot chat bubble
        message: 'What is your name?',
        trigger: '2'
    }, {
        id: '2',
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        //trigger: '4'
        end: true
    }
];

export const config = {
    floating: true
};
  //https://stackoverflow.com/questions/36261225/why-is-export-default-const-invalid