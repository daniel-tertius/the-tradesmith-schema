import { ObjectId } from 'mongodb';

export default interface Schema {
	// log: log;
	bot: bot;
	user: user;
}

// interface log {
//   created_at: Date;
//   title: string;
//   message: string;
//   actor: string;
//   action: string;
//   success: boolean;
// }

interface bot {
	_id: ObjectId;
	bot_title: string;
	base_order_size: number;
	target_profit: number;
	user_id: string;
}

interface user {
	_id: ObjectId;
	email_address: string;
	password: string;
	last_logged_in: Date;
}
