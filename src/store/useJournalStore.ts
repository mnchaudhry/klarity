import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface JournalEntry {
  id: string;
  date: string;
  content: string;
  mood: number;
  tags: string[];
}

interface JournalStore {
  entries: JournalEntry[];
  addEntry: (entry: Omit<JournalEntry, 'id' | 'date'>) => void;
  deleteEntry: (id: string) => void;
  updateEntry: (id: string, content: string) => void;
}

export const useJournalStore = create<JournalStore>()(
  persist<JournalStore>(
    (set) => ({
      entries: [],
      addEntry: (entry: Omit<JournalEntry, 'id' | 'date'>) => 
        set((state: JournalStore) => ({
          entries: [
            {
              ...entry,
              id: crypto.randomUUID(),
              date: new Date().toISOString(),
            },
            ...state.entries,
          ],
        })),
      deleteEntry: (id: string) => 
        set((state: JournalStore) => ({
          entries: state.entries.filter((e: JournalEntry) => e.id !== id),
        })),
      updateEntry: (id: string, content: string) => 
        set((state: JournalStore) => ({
          entries: state.entries.map((e: JournalEntry) => 
            e.id === id ? { ...e, content } : e
          ),
        })),
    }),
    {
      name: 'klarity-journal-storage',
    }
  )
);
