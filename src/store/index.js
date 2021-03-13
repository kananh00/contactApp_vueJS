import { createStore } from 'vuex'
import {createID} from '../utils/createID'
export default createStore({
  state: {
    contacts: [
      {
        id: createID(),
        name: "Kanan",
        surname: "Huseynli",
        phone: "+994703371016",
        email: "kenan.huseynli44@gmail.com",
        adress: "Sumqayit, disc:5",
        birthday: "24.06.2000",
      },

      {
        id: createID(),
        name: "Teymur",
        surname: "Aliyev",
        phone: "+994507763456",
        email: "teymur.aliyev@gmail.com",
        adress: "Baku, Qara Qarayev disc:8",
        birthday: "15.06.1998",
      },

      {
        id: createID(),
        name: "Fatime",
        surname: "Recebova",
        phone: "+994556783423",
        email: "fatima.rajabova@gmail.com",
        adress: "Qabala, disc:11",
        birthday: "18.11.1987",
      },

      {
        id: createID(),
        name: "Rashad",
        surname: "Aghayev",
        phone: "+994774532390",
        email: "rashad.agha@gmail.com",
        adress: "Baku, Narimanov disc:9",
        birthday: "16.01.1978",
      },

      {
        id: createID(),
        name: "Elchin",
        surname: "Qanbayev",
        phone: "+994517864512",
        email: "qanbayev.elchin@gmail.com",
        adress: "Shaki, disc:13",
        birthday: "28.10.1987",
      }
    ],
  },
 
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})


