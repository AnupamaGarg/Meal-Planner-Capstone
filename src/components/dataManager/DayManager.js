const remoteURL = "http://localhost:5002";

export default {
  
  getAll() {
    return fetch(`${remoteURL}/days`).then(e => e.json());
  },
delete(id){
  return fetch(`${remoteURL}/days/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type": "application/json"
      }
  }).then(e=>e.json())
}


};