import { parseISO, format } from "date-fns";

const FormattedDate = ({ dateString }) => {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>{format(date, "dd/MM/yyyy hh:mm")}</time>
    );
};

export { FormattedDate };
