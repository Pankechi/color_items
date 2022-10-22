import { createStore } from 'vuex'

export default createStore({
  state: {
    lists: 
       [ 
        [
          {id: 1,quantity: 10, color:'#440808', is_active: false},
          {id: 2,quantity: 12, color:'#FF0000', is_active: false},
          {id: 3,quantity: 6, color: '#008000', is_active: false},
          {id: 4,quantity: 9, color: '#0000FF', is_active: false},
          {id: 5,quantity: 8, color: '#008080', is_active: false},
          {id: 6,quantity: 3, color: '#FFC0CB', is_active: false},
          {id: 7,quantity: 5, color: '#808080', is_active: false},
          {id: 8,quantity: 1, color: '#000000', is_active: false},
          {id: 9,quantity: 4, color: '#008000', is_active: false},
        ],
       
          [
          {id: 10,quantity: 2, color: '#808080', is_active: false},
          {id: 11,quantity: 6, color: '#000000', is_active: false},
          {id: 12,quantity: 9, color: '#0000FF', is_active: false},
          {id: 13,quantity: 1, color: '#FF0000', is_active: false},
          {id: 14,quantity: 5, color: '#FFC0CB', is_active: false},
          {id: 15,quantity: 4, color: '#FFFF00', is_active: false},
        ],
      ],
      
    },
//     items:[
//        [
//         {id: 1,quantity: 1, color: 'black'},
//         {id: 2,quantity: 3, color: 'red'},
//     ],
//        [
//       {id: 3,quantity: 5, color: 'yellow'},
//       {id: 4,quantity: 6, color: 'red'},
//   ],
// ],
    // lists: [
    //   [
    //     {id: 1,quantity: 1, color: 'black'},
    //     {id: 2,quantity: 3, color: 'red'},
    //     {id: 3,quantity: 5, color: 'green'},
    //     {id: 4,quantity: 7, color: 'teal'},
    //   ],
    //   // [
    //   //   {id: 11,quantity: 2, color: 'gray'},
    //   //   {id: 12,quantity: 6, color: 'black'},
    //   //   {id: 13,quantity: 9, color: 'blue'},
    //   //   {id: 14,quantity: 1, color: 'red'},
    //   //   {id: 15,quantity: 5, color: 'pink'},
    //   //   {id: 16,quantity: 4, color: 'yellow'},
    //   // ],
    //   // [
    //   //   {id: 1,quantity: 5, color: 'black'},
    //   //   {id: 1,quantity: 1, color: 'red'},
    //   //   {id: 1,quantity: 3, color: 'teal'},
    //   //   {id: 1,quantity: 9, color: 'green'},
    //   //   {id: 1,quantity: 10, color:'gray'},
    //   // ],
    //   // [
    //   //   {id: 17,quantity: 10, color:'yellow'},
    //   //   {id: 18,quantity: 12, color:'red'},
    //   //   {id: 19,quantity: 6, color: 'green'},
    //   //   {id: 20,quantity: 9, color: 'blue'},
    //   //   {id: 21,quantity: 8, color: 'teal'},
    //   //   {id: 22,quantity: 3, color: 'pink'},
    //   //   {id: 23,quantity: 5, color: 'gray'},
    //   //   {id: 24,quantity: 1, color: 'black'},
    //   //   {id: 25,quantity: 4, color: 'green'},
    //   // ],
    //   // [
    //   //   {id: 26,quantity: 11, color:'black'},
    //   //   {id: 27,quantity: 3, color: 'red'},
    //   //   {id: 28,quantity: 4, color: 'green'},
    //   //   {id: 29,quantity: 5, color: 'yellow'},
    //   //   {id: 30,quantity: 9, color: 'blue'},
    //   //   {id: 31,quantity: 3, color: 'red'},
    //   //   {id: 32,quantity: 4, color: 'black'},
    //   // ],
    // ]
      
  getters: {
    GET_COLOR(state, id) {
      for (let i = 0; i < state.lists.length; i++) {
        for(let j = 0; j < state.lists[i].length; j++) {
          if (state.lists[i][j].id == id) {
           return state.lists[i][j].color 
          }
        }
      }
    }
  },  
  mutations: {
    CHANGE_QUANTITY(state, odject) {
      for (let i = 0; i < state.lists.length; i++) {
        for(let j = 0; j < state.lists[i].length; j++) {
          if (state.lists[i][j].id == odject.id) {
            state.lists[i][j].quantity = odject.quantity
          }
        }
      }
    },
    CHANGE_COLOR (state, odject) {
      for (let i = 0; i < state.lists.length; i++) {
        for(let j = 0; j < state.lists[i].length; j++) {
          if (state.lists[i][j].id == odject.id) {
            state.lists[i][j].color = odject.color
          }
        }
      }
    },
    REMOVE_BRICK (state, id) {
      for (let i = 0; i < state.lists.length; i++) {
        for(let j = 0; j < state.lists[i].length; j++) {
          if (state.lists[i][j].id == id) {
            state.lists[i][j].quantity--
          }
        }
      }
    }
  },
})