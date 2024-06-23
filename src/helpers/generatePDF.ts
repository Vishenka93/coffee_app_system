import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

function genereatPdf(dd) {
    // const dd = {
    //     content: [
    //         "First paragraph",
    //         "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
    //     ],
    // };

    pdfMake
        .createPdf(dd, undefined, undefined, pdfFonts.pdfMake.vfs)
        .download();
}

export default genereatPdf;
