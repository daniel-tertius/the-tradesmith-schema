export default interface DB {
  log: log;
  config: config;
  user: user;
}

interface log {
  created_at: Date;
  title: string;
  message: string;
  actor: string;
  action: string;
  success: boolean;
}

interface config {}

interface user {
  email_address: string;
  password: string;
  last_logged_in: Date;
}
