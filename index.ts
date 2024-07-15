import { ObjectId } from 'mongodb';

export default interface Schema {
	log: log;
	bot: bot;
	user: user;
	lunoKey: lunoKey;
}

interface log {
  date: Date;
  action: 'place' | 'success' | 'cancel';
  btc_price: number;
  bid_amount: number;
  ask_amount: number;
}

interface bot {
	_id: ObjectId | string;
	bot_title: string;
	base_order_size: number;
	target_profit: number;
	timeout_ms: number;
	status: 'idle' | 'running';
	exchange: 'Luno' | 'Binance';
	order_stack: {
		date: Date,
		
		bid_order_id: string;
		bid_price: number;
		bid_amount: number;

		ask_order_id?: string;
		ask_price?: number;
		ask_amount?: number;
	}[];
	max_stack_size: number;

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
