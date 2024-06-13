import Tr from './Tr';

export default {
    title: 'Components/Molecules/Tr',
    component: Tr,
    args: {
        columns: { control: 'array' },
        row: { control: 'object' },
    },
};

export const Default = {
    args: {
        columns: ['column1', 'column2', 'column3'],
        row: { column1: 'row1', column2: 'row2', column3: 'row3' },
    },
}