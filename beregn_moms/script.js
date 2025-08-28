// Function that receives two arguments: beloeb and moms
// moms has a default parameter of 25 (percent)
function beregnMedMoms(beloeb, moms = 25) {
  const beloebMedMoms = beloeb + (beloeb * moms) / 100;
  console.log(beloebMedMoms);
}

// Examples of how to use the function:

// Using default moms (25%)
beregnMedMoms(100); // Will log: 125

// Using custom moms
beregnMedMoms(100, 20); // Will log: 120
beregnMedMoms(200, 10); // Will log: 220
