const app = new Vue({
    el: '#app',
    data: {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        guests: [],
        formVisible: true,
        resVisible: false
    },
    methods: {
        addGuest() {
            this.guests.push('')
        },
        removeGuest(index) {
            this.guests.splice(index, 1)
        },
        formSend() {
            this.formVisible = false;
            this.resVisible = true
        }
    }
});