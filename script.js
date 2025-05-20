function logicalTableStyle(table) {
    const rows = table.querySelectorAll("tr");
    let logicalIndex = 0;
    let spanGroupColor = null;
    let remainingSpan = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        if (remainingSpan > 0) {
            row.style.backgroundColor = spanGroupColor;
            remainingSpan--;
        } else {
            const firstCell = row.querySelector("td[rowspan]");
            if (firstCell) {
                const span = parseInt(firstCell.getAttribute("rowspan"), 10);
                remainingSpan = span - 1;
                spanGroupColor = logicalIndex % 2 === 0 ? "rgba(240, 243, 248, 0.7)" : "white";
                row.style.backgroundColor = spanGroupColor;
                logicalIndex++;
            } else {
                row.style.backgroundColor = logicalIndex % 2 === 0 ? "rgba(240, 243, 248, 0.7)" : "white";
                logicalIndex++;
            }
        }
    }
}
