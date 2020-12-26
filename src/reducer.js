export const initialState = {
  user: null,
  playlist: [],
  isPlaying: false,

  item: null,
  // Remove after debugging......
  //token: "BQAlJDCD87HVnu9rcxr_X6OBE0-YJE2fb4GAms57y3_ploGbc7…vyGXm3-RMZofg7eA3OavfAT2D2FkAknMQVWkPFCtMZGmPJuSw",
};

const reducer = (state, action) => {
  console.log(action);
  // console.log(state);

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
      
      case "SET_PLAYLIST":
        return{
          ...state,playlist:action.playlist
        }

        case "SET DISCOVER_WEEKLY":
          return{
            ...state,
            discover_weekly:action.discover_weekly,
          }

    default:
      return state;
  }
};

export default reducer;
