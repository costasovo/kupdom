export interface ItemValue {
	name: string;
	isChecked: boolean;
}

export interface Item {
	$key: string;
	value: ItemValue;
}
