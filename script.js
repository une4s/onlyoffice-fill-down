window.Asc.plugin.button = function (id) {};
window.Asc.plugin.init = function () {
    window.Asc.plugin.callCommand(function () {
        var sheet = Api.GetActiveSheet();
        var range = Api.GetSelection();
        var startRow = range.GetRow() - 1;
        var startCol = range.GetCol() - 1;
        var rowCount = range.GetRowsCount();
        var colCount = range.GetColumnsCount();

        function adjustFormula(formula, rowOffset) {
            return formula.replace(/(\$?[A-Z]+)(\$?)(\d+)/g, function(match, col, dollarRow, row) {
                if (dollarRow === "$") {
                    return match;
                }
                return col + (parseInt(row) + rowOffset);
            });
        }

        if (rowCount === 1 && colCount === 1) {
            var vSingle = sheet.GetRangeByNumber(startRow - 1, startCol).GetFormula().replace("= ", "="); // I hate this space so much. Why is it here?
            sheet.GetRangeByNumber(startRow, startCol).SetValue(adjustFormula(vSingle, 1));
            return;
        }

        for (var c = 0; c < colCount; c++) {
            var vCell = sheet.GetRangeByNumber(startRow, startCol + c).GetFormula().replace("= ", "="); // Seriously this space had everything failing silently for so long.
            for (var r = 1; r < rowCount; r++) {
                sheet.GetRangeByNumber(startRow + r, startCol + c).SetValue(adjustFormula(vCell, r));
            }
        }
    }, true);
};

window.Asc.plugin.button = function (id) {};
