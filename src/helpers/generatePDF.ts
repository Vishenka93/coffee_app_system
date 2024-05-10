import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

function genereatPdf() {
    const dd = {
        content: [
            "First paragraph",
            "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
        ],
    };

    pdfMake.createPdf(dd).download();
}

export default genereatPdf;
