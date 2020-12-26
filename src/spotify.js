export const userendPoint = "https://accounts.spotify.com/authorize";

const clientId = "Kindly add your client Id by creating on spotify developer ";

const redirectURL = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];



//  getting the token
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${userendPoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectURL}&scope =${scopes.join(
  "%20"
)}&show_dialog=true`;
