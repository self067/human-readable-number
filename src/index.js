module.exports = function toReadable (number) {
// temporary
  if( number > 1000) return 'too many';
  if( number === 1000) return 'one thousand';
  if( number === 0) return 'zero';

  const dig1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const dig11 = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dig10 = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  // one 'hundred'
  // 
let res = '';
const ln = (''+number).length;

  (''+number).split('').forEach((v,i,ar)=>{
    const vnum = parseInt(v);
    if( ln-i === 4 ) res += dig1[vnum] + ' thousand';
    if(ln-i === 3 && vnum ) res += dig1[vnum] + ' hundred';
    if(ln-i === 2 && vnum > 1 ) res += ' '+dig10[vnum];

    if(ln-i === 1) {
      res += ' ';
      if( ln > 1 && ar[i-1] === '1') res += dig11[vnum];
      else res += dig1[vnum];
    }

  });

  return res.trim();
}
