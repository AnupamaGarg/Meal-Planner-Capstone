const remoteURL = "http://localhost:5002";

export default {
  
  getUser(object) {
  return fetch(`${remoteURL}/${object}`).then(e => e.json());
},
post(key,object) {
  return fetch(`${remoteURL}/${key}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  })
  .then(e => e.json());
}
};


