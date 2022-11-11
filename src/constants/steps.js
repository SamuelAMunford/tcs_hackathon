
export const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
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
        trigger: '4'
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Show Map', trigger: '5' },
            { value: 2, label: 'HR Policy and Contact Information', trigger: '6' },
            { value: 3, label: 'Guest WiFi', trigger: '7' },
            { value: 4, label: 'I have my own question', trigger: '8'}
        ]
    }, {
        id: '5',
        message: 'test\nDo you have another question?',
        trigger: 'options'
    }, {
        id: '6',
        message: "Here is the number for HR: 888-888-1234. The current HR member on call is Brian Wilson. This is the HR policy site: \nDo you have another question?",
        trigger: 'options'
    }, {
        id: '7',
        message: "The WiFi network is GuestWifi and the password is: password\n\nDo you have another question?",
        trigger: 'options'
    }, {
        id: '8',
        message: "What are you looking for?",
        trigger: 'input'
    }, {
        id: 'options',
        options: [
            {value: '1', label: 'Yes', trigger: '4'},
            {value: '2', label: 'No', trigger: '99'}
        ]
        
    }, {
        id: 'input',
        question: true,
        trigger: '99'
    }, {
        id: '99',
        message: "If you have, any questions we could not answer, please call this number: 444-444-4444\nThank you and have a nice day",
        end: true
    }
];

export const config = {
    floating: true
};
  //https://stackoverflow.com/questions/36261225/why-is-export-default-const-invalid