interface AuthSignUp {
  username: string;
  email: string;
  password: string;
  linkedIn: string;
}

interface AuthSignIn {
  email: string;
  password: string;
}

interface UserData {
  _id: string;
  username: string;
  email: string;
  linkedIn: string;
}

interface Task {
  _id: string;
  title: string;
  describtion: string;
  duoDate: Date;
  isCompleted: boolean;
  tags: string[];
}

interface CreateTask {
  userId: string;
  title: string;
  describtion: string;
  duoDate?: Date;
  isCompleted?: boolean;
  tags?: string[];
}

interface UpdateTask {
  title?: string;
  describtion?: string;
  duoDate?: Date;
  isCompleted?: boolean;
  tags?: string[];
}

interface LinkedInProfile {
  name: string;
  role: string;
  imageSrc: string;
}
