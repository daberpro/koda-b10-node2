import { convertTanggalByMoment, convertTanggalBySelf } from "./convert.mjs";
import { createInterface } from "node:readline/promises";


async function getInputAndConvert() {

    let tanggal;
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    tanggal = await rl.question("Masukan tanggal dengan format DD-MM-YYYY: ");
    rl.close();

    console.log(`tanggal yang dimasukan: ${tanggal}`)
    console.log(convertTanggalBySelf(tanggal));
    console.log(convertTanggalByMoment(tanggal));

}

getInputAndConvert();
