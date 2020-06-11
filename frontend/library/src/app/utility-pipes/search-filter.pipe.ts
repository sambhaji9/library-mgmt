import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

	transform(items: any[], value: string): any[] {
		if (!items) return [];
		if (!value) return items;

		return items.filter(item => {
			if (typeof item.name !== "undefined") {
				return item.name.toLowerCase().includes(value);
			} else if (typeof item.bookName !== "undefined") {
				return item.bookName.toLowerCase().includes(value);
			}
		});
	}

}
