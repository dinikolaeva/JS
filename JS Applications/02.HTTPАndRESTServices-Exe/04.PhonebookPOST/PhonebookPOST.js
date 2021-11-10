//POST: http://localhost:3030/jsonstore/phonebook -> Body -> raw -> JSON -> body content:

{
    "person": "Didi",
    "phone": "+1-555-925"
}

//GET: http://localhost:3030/jsonstore/phonebook
// return JSON:

{
    "2d5ae478-87c7-45fa-acf9-f04aa4724421": {
        "person": "Maya",
        "phone": "+1-555-7653",
        "_id": "2d5ae478-87c7-45fa-acf9-f04aa4724421"
    },
    "6012c542-38e1-4660-ba40-1b109c40cb2f": {
        "person": "John",
        "phone": "+1-555-4986",
        "_id": "6012c542-38e1-4660-ba40-1b109c40cb2f"
    },
    "d749a819-1e41-4c65-9ce2-7b429c4ebd0d": {
        "person": "Nicolle",
        "phone": "+1-555-9124",
        "_id": "d749a819-1e41-4c65-9ce2-7b429c4ebd0d"
    },
    "9aa4c37c-a6f1-47bc-806e-fa9e227da657": {
        "person": "Didi",
        "phone": "+1-555-925",
        "_id": "9aa4c37c-a6f1-47bc-806e-fa9e227da657"
    }
}