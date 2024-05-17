export class ApiModule{

    constructor() {
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

   async post(url, data) {
        const response = await fetch(`${this.baseURL}/${url}`, {
            method: 'POST',
            headers: {'Content-Type': "apllication/json"},
            body: data
        });
        return await response.json();
    }

    get(url) {
        return new Promise( async (resolve, reject) => {
            const fetchData = await fetch(this.baseURL + url);
            const result = await fetchData.json();
            resolve(result);
        })
    }

    find(id, url) {
        return new Promise( async (resolve, reject) => {
            let response = await fetch(this.baseURL + url + `/${id}`);
            let result = await response.json();
            resolve(result);
        })
    }
}
