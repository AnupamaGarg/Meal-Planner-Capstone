const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/meals/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/meals`).then(e => e.json());
  },
  post(newMeal) {
    return fetch(`${remoteURL}/meals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMeal)
    })
    .then(e => e.json());
  },
  delete(id){
    return fetch(`${remoteURL}/meals/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json"
        }
    }).then(e=>e.json())
  },

  put(mealId, existingMeal) {
    return fetch(`${remoteURL}/meals/${mealId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingMeal)
    }).then(data => data.json());
  }
};
