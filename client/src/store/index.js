import { configureStore, createSlice } from "@reduxjs/toolkit";

const tabs = [
  { name: "React.js", checked: false },
  { name: "JS", checked: false },
  { name: "CSS", checked: false },
  { name: "HTML", checked: false }
];
const apiSlice = createSlice({
  name: "parts",
  initialState: {
    currentPageUrl : `https://mernportfolio.onrender.com/api/v1/projects`,
    title: "",
    languages: "",
    page: 1,
    langTabs: tabs,
  },
  reducers: {
    handleTitle(state, action) {
      state.title = action.payload;
    },
    handleLanguage(state, action) {
      const tab = state.langTabs[action.payload];
      tab.checked = !tab.checked;
      const langChainArr = state.langTabs.flatMap((tab) => {
        return tab.checked ? [tab.name] : [];
      });
      state.languages = langChainArr.join("&");
    },
    handlePage(state, action) {
      if (state.page !== action.payload.limit) {
        state.page += action.payload.difference;
      }
    },
    handlePageJump(state, action){
      state.page = Number(action.payload)
    },
    handleReset(state,action){
      state.title = ""
      state.languages = ""
      state.langTabs = tabs
      state.page = Number(1)
    }
  }
});

export const actions = apiSlice.actions;

const store = configureStore({
  reducer: apiSlice.reducer
});

export default store;