export function CalculatePercentaje(totalTask, percentage, taskDone) {
    if (totalTask.current)
        percentage.current.textContent = Math.round((taskDone.current / totalTask.current) * 100) + '%';
    else
        percentage.current.textContent = '0%';
}