export interface Profile {
  id: string;
  name: string;
  email: string;
  role: string;
  status: boolean;
}

export interface ProfileMutation {
  name: string;
  email: string;
  role: string;
  status: boolean;
}