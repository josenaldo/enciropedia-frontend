import { parse, format } from "date-fns";

const FormattedDate = ({ dateString }) => {
    const date = parse(dateString, "yyyy-MM-dd HH:mm", new Date());
    return <time dateTime={dateString}>{format(date, "dd/MM/yyyy")}</time>;
};

export { FormattedDate };
