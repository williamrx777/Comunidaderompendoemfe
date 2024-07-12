import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk',
  standalone: true
})
export class ChunkPipe implements PipeTransform {
  transform(array: any[], size: number): any[][] {
    if (!array.length) return [];
    return array.reduce((acc, curr, i) => {
      if (i % size === 0) acc.push([]);
      acc[Math.floor(i / size)].push(curr);
      return acc;
    }, []);
  }
}
