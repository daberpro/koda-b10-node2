import { convertTanggalByMoment, convertTanggalBySelf } from "./convert.mjs";
import { createInterface } from "node:readline/promises";


async function getInputAndConvert() {

    let hari, bulan, tahun;
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    hari = await rl.question("Masukan hari [1-31]: ");
    bulan = await rl.question("Masukan bulan [1-12]: ");
    tahun = await rl.question("Masukan tahun: ");
    rl.close();


    if (hari.length < 2) {
        hari = `${"0".repeat(2 - hari.length)}${hari}`;
    }
    if (bulan.length < 2) {
        bulan = `${"0".repeat(2 - bulan.length)}${bulan}`;
    }
    if (tahun.length < 4) {
        tahun = `${"0".repeat(4 - tahun.length)}${tahun}`;
    }

    const input = `${hari}-${bulan}-${tahun}`;
    console.log(`tanggal yang dimasukan: ${input}`);
    console.log(convertTanggalBySelf(input));
    console.log(convertTanggalByMoment(input));

}

getInputAndConvert();
