/**
 * 
 * @param minesMap 
 */
export default function fillMinesMap(minesMap: string[]) {
   if (!minesMap.length) return;
   const iSize = minesMap.length;
   const jSize = minesMap[0].length;

   const digitsMap: number[][] = new Array(iSize);
   const resultMap: string[][] = new Array(iSize);
   
   for (let i = 0; i < iSize; i++) {
      digitsMap[i] = new Array(jSize).fill(0);
      resultMap[i] = new Array(jSize).fill('');
   }

   for (let i = 0; i < iSize; i++) {
		for (let j = 0; j < jSize; j++) {
			if (minesMap[i][j] != '*') continue;

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
			if (minesMap[i][j] == '*') continue;

			resultMap[i][j] = digitsMap[i][j] + '';
		}
	}
}

function incrementMapCell(digitsMap: number[][], i: number, j: number) { 

}