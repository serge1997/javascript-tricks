import { Api } from "./bootstrap.js";

let user = Api.find(6, 'users');
user.then((response) => {
    console.log(response)
})









