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

    let split_tanggal = tanggal.split("-");
    split_tanggal = split_tanggal.map((d) =>{
        return {
            raw: d,
            value: Number(d)
        };
    });

    if (split_tanggal.length < 3 || split_tanggal.length > 3 ||
        Number.isNaN(split_tanggal[0].value) || Number.isNaN(split_tanggal[1].value) ||Number.isNaN(split_tanggal[2].value) 
        || split_tanggal[0].value > 31 || split_tanggal[1].value > 12 
        || split_tanggal[0].value == 0 || split_tanggal[1].value == 0 
        || split_tanggal[2].value == 0 || split_tanggal[0].raw.length < 2 
        || split_tanggal[0].raw.length > 2 || split_tanggal[1].raw.length < 2 
        || split_tanggal[1].raw.length > 2 || split_tanggal[2].raw.length < 4 
        || split_tanggal[2].raw.length > 4
    ) {
        console.log("Format tanggal salah");
        return;
    }

    return `${split_tanggal[0].raw}/${split_tanggal[1].raw}/${split_tanggal[2].raw}`;

}
