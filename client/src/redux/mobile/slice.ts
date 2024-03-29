import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MobileState } from './types';
const initialState: MobileState = {
  title: '',
  isSidebarShow: false,
  isHeaderShow: false,
  hasArrowButton: false,
  hasAddButton: false,
  infoName: '',
  backText: '',
  hasUploadButton: false,
  membersCount: 0,
  backButtonType: 'button',
  chatId: 0,
};

// сделать один редюср с типом страницы и в компоненте мобилок делать проверки

const MobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setIsSidebarShow(state, action: PayloadAction<boolean>) {
      state.isSidebarShow = action.payload;
    },
    setIsHeaderShow(state, action: PayloadAction<boolean>) {
      state.isHeaderShow = action.payload;
    },
    setHasArrowButton(state, action: PayloadAction<boolean>) {
      state.hasArrowButton = action.payload;
    },
    setIsInfoName(state, action: PayloadAction<string>) {
      state.infoName = action.payload;
    },
    setHasBackButton(state, action: PayloadAction<string>) {
      state.backText = action.payload;
    },
    setMembersCount(state, action: PayloadAction<number>) {
      state.membersCount = action.payload;
    },
    setBackButtonType(state, action: PayloadAction<'button' | 'link'>) {
      state.backButtonType = action.payload;
    },
    setChatId(state, action: PayloadAction<number>) {
      state.chatId = action.payload;
    },
    setHasAddButton(state, action: PayloadAction<boolean>) {
      state.hasAddButton = action.payload;
    },
    setHasUploadButton(state, action: PayloadAction<boolean>) {
      state.hasUploadButton = action.payload;
    },
  },
});

export const {
  setTitle,
  setIsSidebarShow,
  setIsHeaderShow,
  setHasArrowButton,
  setIsInfoName,
  setHasBackButton,
  setMembersCount,
  setBackButtonType,
  setChatId,
  setHasAddButton,
  setHasUploadButton,
} = MobileSlice.actions;

export default MobileSlice.reducer;
