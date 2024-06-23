import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";

function genereatPdf(dd: TDocumentDefinitions) {
    

    pdfMake
        .createPdf(dd, undefined, undefined, pdfFonts.pdfMake.vfs)
        .download();
}

export default genereatPdf;
