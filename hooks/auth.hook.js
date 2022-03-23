import { useState, useCallback } from "react";

export const useHttp = () => {
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        const options = !body
          ? { method, headers }
          : { method, body: JSON.stringify(body) };

        const response = await fetch(
          "http://192.168.0.101:5000" + url,
          options
        );

        const data = await response.json();
        if (!response.ok) {
          console.log('"Что то пошло не так"');
        }

        return data;
      } catch (error) {
        throw error;
        console.log('"Что то пошло не так"');
      }
    },
    []
  );

  return { request };
};
