import { parseISO, format } from "date-fns";

const FormattedDate = ({ dateString }) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "dd/MM/yyyy")}</time>;
};

export { FormattedDate };
