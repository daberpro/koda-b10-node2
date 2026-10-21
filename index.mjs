import moment from "moment";
import convert from "./convert.mjs";

function convertTanggalByMoment(tanggal) {
    const date = moment(tanggal, "DD-MM-YYYY", true);
    if (!date.isValid()) {
        console.log("Format tanggal salah");
        return;
    }

    return date.format("DD/MM/YYYY");
}


console.log(convert("24-04-2015"));
console.log(convertTanggalByMoment("24-04-2015"));
