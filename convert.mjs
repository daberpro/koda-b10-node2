import moment from "moment";

export function convertTanggalByMoment(tanggal) {
    const date = moment(tanggal, "DD-MM-YYYY", true);
    if (!date.isValid()) {
        console.log("Format tanggal salah");
        return;
    }

    return date.format("DD/MM/YYYY");
}

export function convertTanggalBySelf(tanggal) {

    let splitTanggal = tanggal.split("-");
    splitTanggal = splitTanggal.map((d) =>{
        return {
            raw: d,
            value: Number(d)
        };
    });

    if (splitTanggal.length < 3 || splitTanggal.length > 3 ||
        Number.isNaN(splitTanggal[0].value) || Number.isNaN(splitTanggal[1].value) ||Number.isNaN(splitTanggal[2].value) 
        || splitTanggal[0].value > 31 || splitTanggal[1].value > 12 
        || splitTanggal[0].value == 0 || splitTanggal[1].value == 0 
        || splitTanggal[2].value == 0 || splitTanggal[0].raw.length < 2 
        || splitTanggal[0].raw.length > 2 || splitTanggal[1].raw.length < 2 
        || splitTanggal[1].raw.length > 2 || splitTanggal[2].raw.length < 4 
        || splitTanggal[2].raw.length > 4
    ) {
        console.log("Format tanggal salah");
        return;
    }

    return `${splitTanggal[0].raw}/${splitTanggal[1].raw}/${splitTanggal[2].raw}`;

}
