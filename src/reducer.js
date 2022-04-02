export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token:
  //   "BQBK7DnZV2hW9wjgf02p3qD1rYtKpCAd6zG4bHq_wAoSoPLDU2QGPRpcJDRRu5R4622HZ20_D4yO83I-eHAMUpnWoRw8HpTa9hza7ljA2f4S_ZaUlQQJzKFOq-dmiWsPWHaukkKQ3V8LWuZQmZjvy3HfljgVwkkULJIcLvjvhlSdW18oyCWk",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playLists: action.playlists };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
