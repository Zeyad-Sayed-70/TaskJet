"use client";
import { useEffect, useRef } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeTokenInLocal } from "@/lib/storeTokenInLocal";

const useRegister = () => {
  const { isLoading, isSuccess, isError, auth, message } = useSelector(
    (state: RootState) => state.auth
  );

  const router = useRouter();

  // Store the previous state
  const prevIsSuccess = useRef(isSuccess);
  const prevIsError = useRef(isError);

  useEffect(() => {
    // Only run if isSuccess has changed
    if (
      prevIsSuccess.current !== isSuccess &&
      !isLoading &&
      !isError &&
      isSuccess
    ) {
      if (auth) {
        storeTokenInLocal(auth.token);
        toast("You Registered Successfully!");
        setTimeout(() => (location.href = "/"), 1000);
      }
    }
    // Update the previous state
    prevIsSuccess.current = isSuccess;
  }, [isLoading, isSuccess, isError, auth]);

  useEffect(() => {
    // Only run if isError has changed
    if (prevIsError.current !== isError && !isLoading && isError) {
      toast("There is something wrong!", { style: { color: "tomato" } });
    }
    // Update the previous state
    prevIsError.current = isError;
  }, [isLoading, isError]);

  return { userData: auth?.data };
};

export default useRegister;
