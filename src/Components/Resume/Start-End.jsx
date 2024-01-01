export default function StartToEnd({
    start, 
    end,
    showEnd = true,
}) 
{
    let startDate;
    let endDate;

    if (start){
        startDate = new Date(start);
        startDate.setDate(startDate.getDate() + 1);
    }

    if (end) {
        endDate = new Date(end);
        endDate.setDate(endDate.getDate() + 1);
    }

    return (
        <span className="start-end">
            {start && (
                <span>
                    {startDate.toLocaleString('default', { month: 'short', year: 'numeric' })}
                    {showEnd && ' - '}
                </span>
            )}
            {showEnd && end ? (
                <span> 
                    {endDate.toLocaleString('default', { month: 'short', year: 'numeric' })}
                </span>
            ) : (
                showEnd && <span> Present </span>
            )}
        </span>
        );
    }