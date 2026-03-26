export type Profile = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  streak_start: string | null;
  best_streak: number;
  last_relapse: string | null;
  created_at: string;
  updated_at: string;
};

export type Streak = {
  id: string;
  user_id: string;
  start_date: string;
  end_date: string | null;
  is_active: boolean;
  notes: string | null;
  created_at: string;
};

export type Relapse = {
  id: string;
  user_id: string;
  streak_id: string;
  relapse_date: string;
  trigger_type: string | null;
  severity: 'low' | 'medium' | 'high';
  notes: string | null;
  created_at: string;
};

export type Trigger = {
  id: string;
  user_id: string;
  name: string;
  category: 'emotional' | 'situational' | 'social' | 'physical';
  description: string | null;
  intensity: number;
  created_at: string;
};

export type JournalEntry = {
  id: string;
  user_id: string;
  content: string;
  mood: string | null;
  tags: string[];
  is_private: boolean;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>;
      };
      streaks: {
        Row: Streak;
        Insert: Omit<Streak, 'id' | 'created_at'>;
        Update: Partial<Omit<Streak, 'id' | 'user_id' | 'created_at'>>;
      };
      relapses: {
        Row: Relapse;
        Insert: Omit<Relapse, 'id' | 'created_at'>;
        Update: Partial<Omit<Relapse, 'id' | 'user_id' | 'created_at'>>;
      };
      triggers: {
        Row: Trigger;
        Insert: Omit<Trigger, 'id' | 'created_at'>;
        Update: Partial<Omit<Trigger, 'id' | 'user_id' | 'created_at'>>;
      };
      journal_entries: {
        Row: JournalEntry;
        Insert: Omit<JournalEntry, 'id' | 'created_at'>;
        Update: Partial<Omit<JournalEntry, 'id' | 'user_id' | 'created_at'>>;
      };
    };
  };
};
