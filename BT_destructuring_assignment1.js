// let profile = {
//     fname : "Nghiem",
//     lname : "Dong",
//     bday : new Date('1995-08-08')
// }

// let fname = profile.fname;
// let lname = profile.lname;

let {fname, lname, ...bday} = {fname : 'code', lname : 'gym', bday : new Date + '1995-08-08'}

console.log(fname, lname, bday);