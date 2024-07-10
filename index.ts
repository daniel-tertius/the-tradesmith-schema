import { ObjectId } from 'mongodb';

export default interface Schema {
	// log: log;
	bot: bot;
	user: user;
	lunoKey: lunoKey;
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
	_id: ObjectId | string;
	bot_title: string;
	base_order_size: number;
	target_profit: number;
	timeout_ms: number;
	status: 'idle' | 'running';
	exchange: 'Luno' | 'Binance';
	// Can go up to five.
	buy_stack: { order_id: string; price: number }[];
	user_id: string;
}

interface user {
	_id: ObjectId | string;
	email_address: string;
	password: string;
	last_logged_in?: Date;
}

interface lunoKey {
	_id: ObjectId | string;
	key: string;
	secret: string;
	user_id: string;
}
