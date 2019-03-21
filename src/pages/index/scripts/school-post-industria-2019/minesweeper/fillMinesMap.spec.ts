import { expect, assert } from 'chai';
import fillMinesMap from './fillMinesMap';

describe('fillMinesMap', () => {
   it('Map 4x4', () => {
      const res = fillMinesMap([
         '*...',
         '....',
         '.*..',
         '....',
      ]);

      expect(res).to.have.deep.members([
         '*100',
         '2210',
         '1*10',
         '1110',
      ]);
   });
   
   it('Map 3x5', () => {
      const res = fillMinesMap([
         '**...',
         '.....',
         '.*...',
      ]);

      expect(res).to.have.deep.members([
         '**100',
         '33200',
         '1*100',
      ]);
   });

   it('Map 0x0', () => {
      const res = fillMinesMap([]);
      expect(res).to.have.deep.members([]);
   });
});