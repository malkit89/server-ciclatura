const fs = require('fs');
const csv = require('fast-csv');

/**
 * Leggi il file esportato da movicon e restiruisce array con oggetti json per ogni riga
 */
async function leggiDati(filePath) {
    return new Promise(function (resolve, reject) {
        let dati = [];
        //apro il file per la lettura in modalità streaming
        let rs = fs.createReadStream(filePath);
        rs.on('error', error => {
            reject({
                msg: "Errore lettura file",
                err: error
            });
        });

        csv.parseStream(rs, { headers: true, delimiter: '\t' })
            .on('error', handleError)
            .on('data', handleData)
            .on('end', handleEnd);

        function handleError(error) {
            // console.error(error);
            reject({
                msg: "Errore parsing file",
                err: error
            });
        }

        function handleData(row) {
            // console.log(row);
            dati.push(row);
        }

        function handleEnd(rowCount) {
            // console.log(`Parsed ${rowCount} rows`);
            resolve(dati);
        }
    });
}

module.exports = leggiDati