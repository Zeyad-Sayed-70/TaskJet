"use client";
import { useAuth } from "@/context/AuthProvider";
import { getProfile } from "@/redux/linkedIn/slice";
import { AppDispatch, RootState } from "@/redux/store";
import { getUserData } from "@/redux/user/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { profile, isLoading, isSuccess } = useSelector(
    (state: RootState) => state.linkedin
  );
  const { authToken } = useAuth();
  const { userData } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (authToken) {
      dispatch(getUserData({ token: authToken }));
    }
  }, [authToken]);

  useEffect(() => {
    if (userData) {
      dispatch(getProfile(userData.linkedIn));
    }
  }, [userData]);

  return (
    <div className="flex items-center gap-3">
      <img
        alt="avatar"
        src={profile?.imageSrc || "/user.jpg"}
        className="rounded-full max-w-[60px] max-h-[60px] min-w-[60px] min-h-[60px]"
      />

      {isLoading ? (
        <h1 className="text-xs text-gray-500">We getting your data...</h1>
      ) : (
        <div>
          <h5 className="text-md text-black font-semibold">{profile?.name}</h5>
          <span className="text-sm text-gray-500">{profile?.role}</span>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
