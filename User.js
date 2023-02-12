const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Enter a valid email'],
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        suite: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
            match: [/^[a-zA-Z ]*$/, 'Enter valid city name']
        },
        zipcode: {
            type: String,
            required: true,
            match: [/^[0-9]{5}-[0-9]{4}$/]
        },
        geo: {
            lat: {
                type: String,
                required: true,
            },
            lng: {
                type: String,
                required: true
            },
        }
    },
    website: {
        type: String,
        required: true,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Enter valid website url']
    },
    
    phone: {
        type: String,
        required: true,
        match: [/^[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/]
    },
    company: {
        name: {
            type: String,
            required: true,
        },
        catchPhrase: {
            type: String,
            required: true,
        },
        bs: {
            type: String,
            required: true,
        }
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User