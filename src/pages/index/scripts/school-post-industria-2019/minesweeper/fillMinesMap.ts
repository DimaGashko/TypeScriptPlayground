/**
 * 
 * @param minesMap 
 */
export default function fillMinesMap(minesMap: string[]) {
   if (!minesMap.length) return;
   const iSize = minesMap.length;
   const jSize = minesMap[0].length;

   const digitsMap: number[][] = new Array(iSize);
   const charsMap: string[][] = new Array(iSize);
   
   for (let i = 0; i < iSize; i++) {
      digitsMap[i] = new Array(jSize).fill(0);
      charsMap[i] = new Array(jSize).fill('');
   }

   for (let i = 0; i < iSize; i++) {
		for (let j = 0; j < jSize; j++) {
			if (minesMap[i][j] !== '*') continue;

			incrementMapCell(digitsMap, i + 1, j - 1);
			incrementMapCell(digitsMap, i + 1, j + 1);
			incrementMapCell(digitsMap, i - 1, j + 1);
			incrementMapCell(digitsMap, i - 1, j - 1);
			incrementMapCell(digitsMap, i + 1, j);
			incrementMapCell(digitsMap, i - 1, j);
			incrementMapCell(digitsMap, i, j + 1);
			incrementMapCell(digitsMap, i, j - 1);
		}
	}

	for (let i = 0; i < iSize; i++) {
		for (let j = 0; j < jSize; j++) {
         if (minesMap[i][j] === '*') charsMap[i][j] = '*';
         else charsMap[i][j] = digitsMap[i][j] + '';
		}
   }
   
   return charsMap.map(row => row.join(''));
}

function incrementMapCell(map: number[][], i: number, j: number) { 
   if (!map.length) return;

	if (i < 0 || j < 0 || i >= map.length || j >= map[0].length) {
		return;
	}

	map[i][j]++;
}