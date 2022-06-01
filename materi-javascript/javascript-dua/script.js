let angkot = 10;

for (let index = 1; index <= angkot; index++) {
  if (index == 8) {
    console.log(`Angkot No. ${index} sedang lembur.`);
  } else if (index > 6) {
    console.log(`Angkot No. ${index} sedang diperbaiki.`);
  } else {
    console.log(`Angkot No. ${index} beroperasi dengan baik.`);
  }
}
