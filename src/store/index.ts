import { create } from "zustand";

type AnswersState = {
  answers: { key: string; value: string[] }[];
  addAnswer: (key: string, value: string) => void;
  removeAnswer: (key: string, value: string) => void;
};

const useAnswersStore = create<AnswersState>((set) => ({
  answers: [],
  addAnswer: (key, value) =>
    set((state) => {
      const existingEntry = state.answers.find((entry) => entry.key === key);
      if (existingEntry) {
        return {
          answers: state.answers.map((entry) =>
            entry.key === key
              ? { ...entry, value: [...new Set([...entry.value, value])] }
              : entry
          ),
        };
      } else {
        return {
          answers: [...state.answers, { key, value: [value] }],
        };
      }
    }),
  removeAnswer: (key, value) =>
    set((state) => {
      return {
        answers: state.answers
          .map((entry) =>
            entry.key === key
              ? {
                  ...entry,
                  value: entry.value.filter((v) => v !== value),
                }
              : entry
          )
          .filter((entry) => entry.value.length > 0),
      };
    }),
}));

export default useAnswersStore;
