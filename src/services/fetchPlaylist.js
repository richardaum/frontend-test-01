import axios from "axios";
import cache from "./cache";

// TODO replace api key
const API_KEY = "YOUR_API_KEY_HERE";
const PLAYLIST = "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF";
const MAX_RESULTS = 5;
const URL_BASE = `https://www.googleapis.com/youtube/v3/playlistItems`;
const PART = "snippet";

// eslint-disable-next-line no-underscore-dangle
const __fetchPlaylist = async ({ pageToken } = {}) => {
  const url = `${URL_BASE}?part=${PART}&maxResults=${MAX_RESULTS}&playlistId=${PLAYLIST}&key=${API_KEY}${
    pageToken ? `&pageToken=${pageToken}` : ""
  }`;

  const response = await axios.get(encodeURI(url));
  const { items } = response.data;

  cache.items = [...cache.items, ...items];
  cache.playlist = response.data;
  cache.playlistLength = response.data.pageInfo.totalResults;

  return cache.items;
};

export default async function fetchPlaylist() {
  return __fetchPlaylist();
}

fetchPlaylist.next = async () => {
  const pageToken = cache.playlist.nextPageToken;
  return __fetchPlaylist({ pageToken });
};
