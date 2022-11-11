import Helper from '../components/Helper.js'

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
        message: 'A map image will appear\nDo you have another question?',
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
            {value: '2', label: 'No', trigger: 'input'}
        ]
    }, {
        id: '99',
        message: "I am happy I could help you today. \nThank you and have a nice day",
        end: true
    }, {
        id: 'input',
        user: true,
        trigger: '98',
        validator: (value)=> {
             if (value.includes("middle")){
                 return 'Your middle name is not required'
             } else if(value.includes("employee ID")){
                 return 'Your employee ID is not required if you are not an Employee of TCS'
             } else{
                 return true;
             }
             return true;
         },
     },//{
    //     id: '97',
    //     validator: (previousValue)=> {
    //         if (previousValue.contains("middle")){
    //             return 'Your middle name is not required'
    //         } else if(previousValue.contains("employee ID")){
    //             return 'Your employee ID is not required if you are not an Employee of TCS'
    //         } else{
    //             return 'I have no idea'
    //         }
    //     },
    //     trigger: '99'

     {
        id: '98',
        message: "Sorry I unfortunately couldn't understand your issue. Please create an ADO ticket so that we can better assist you: https://azure.microsoft.com/en-us/products/devops/#overview \nThank you and have a nice day"
    }
];

export const config = {
    floating: true
};
  //https://stackoverflow.com/questions/36261225/why-is-export-default-const-invalid