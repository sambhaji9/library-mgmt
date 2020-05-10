import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

	transform(items: any[], value: string): any[] {
		if (!items) return [];
		if (!value) return items;

		return items.filter(item => {
			return item.name.toLowerCase().includes(value);
		});
	}

}
