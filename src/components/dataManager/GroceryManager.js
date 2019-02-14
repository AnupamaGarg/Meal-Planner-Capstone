const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/groceries/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/groceries?_expand=type`).then(e => e.json());
  },
  post(newGrocery) {
    return fetch(`${remoteURL}/groceries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGrocery)
    })
    .then(e => e.json());
  },
  delete(id){
    return fetch(`${remoteURL}/groceries/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json"
        }
    }).then(e=>e.json())
  },

  put(groceryId, existingGrocery) {
    return fetch(`${remoteURL}/groceries/${groceryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingGrocery)
    }).then(data => data.json());
  }
};
