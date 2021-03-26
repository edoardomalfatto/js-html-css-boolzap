Vue.config.devtools = true;


var app = new Vue({
        el: '#app',

        data: {
            searchContact: "",
            isWriting: false,
            lastAccess: "",
            newMessage: "",
            counter: 0,
            active: "active",
            sended: "sended_message",
            recieved: "received_message",
            sent: "sent",
            prefix: "img/avatar",
            format: ".jpg",
            myContact: {
                name: "Edoardo",
                avatar: "_io",
                visible: true
            },
            contacts: [{
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        methods: {
            userClick: function(index) {
                this.counter = index;
                console.log(index);
                console.log(this.searchContact);
            },
            addMessage: function(counter) {
                if (this.newMessage != "") {
                    this.contacts[counter].messages.push({
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: this.newMessage,
                        status: 'sent'
                    });
                    this.newMessage = "";
                    this.answerMessage();
                }
            },
            answerMessage: function() {
                this.isWriting = true;
                setTimeout(() => {
                    this.contacts[this.counter].messages.push({
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: "ok",
                        status: 'received'
                    });
                    this.isWriting = false;
                }, 1000);
            },
            searchingContact: function() {
                for ((contact) of(this.contacts)) {

                    if (this.searchContact != "" && contact.name.includes(this.capitalizeFirstLetter(this.searchContact)) == false) {
                        console.log(contact.visible);
                        contact.visible = false;

                    } else {
                        contact.visible = true;
                    }
                }
            },
            capitalizeFirstLetter: function(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

        }
    },

    /*     created: function() {
            console.log(this.contacts);
            for ((contact) of(this.contacts)) {
                if (this.searchContact != "" && contact.name.includes(this.searchContact) == false) {
                    contact.visible = false;
                }
            }
        } */
);


//per ogni nome contenuto nell'array 
//se la parola cercata include i nomi
// dei contatti
//setto visible:true,altrmenti false
//faccio un bind della classe se visible=true allora aggiungo classe con v-bind.