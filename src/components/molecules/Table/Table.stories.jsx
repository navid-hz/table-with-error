import Table from "./Table";
import { data } from "../../../data/data";

export default {
    title: 'Components/Molecules/Table',
    component: Table,
    args: {
        data: { control: 'array' },
    },
};

export const Default = {
    args: {
        data: data,
    },
}

export const Empty = {
    args: {
        data: [],
    },
}