import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../components/favorites/favorites.slice";

const rootActions = {
  ...actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
