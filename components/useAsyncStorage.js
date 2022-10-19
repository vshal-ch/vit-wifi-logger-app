import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
async function getSavedValue(key, initialValue) {
  let savedValue = await AsyncStorage.getItem(key);
  savedValue = JSON.parse(savedValue);
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useAsyncStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    async function helper() {
      const v = await getSavedValue(key, initialValue);
      setValue(v);
    }
    helper();
  }, []);
  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
