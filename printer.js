function print() {
    console.log(`${this.name} can print document`);
};
function scan() {
    console.log(`${this.name} can scan document`);
};

const printer = {
    name: 'PrinterName',
    print
};
const scaner = {
    name: 'ScanerName',
    scan
};
const copier = {
    name: 'CopierName',
    print,
    scan
};
copier.print();
copier.scan();
printer.print();
scaner.scan();