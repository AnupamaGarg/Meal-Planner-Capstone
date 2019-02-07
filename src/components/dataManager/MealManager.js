const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/meal/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/meal`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/days`).then(e => e.json());
  },
  post(newMeal) {
    return fetch(`${remoteURL}/meal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMeal)
    })
    .then(e => e.json());
  },
  delete(id){
    return fetch(`${remoteURL}/meal/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json"
        }
    }).then(e=>e.json())
  },

  put(mealId, existingMeal) {
    return fetch(`${remoteURL}/meal/${mealId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingMeal)
    }).then(data => data.json());
  }
};
