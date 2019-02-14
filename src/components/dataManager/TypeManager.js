const remoteURL = "http://localhost:5002";

export default {



getAll() {
    return fetch(`${remoteURL}/types`).then(e => e.json());
  }
}