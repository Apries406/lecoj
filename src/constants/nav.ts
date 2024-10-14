import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>['items'][number] & {
    path?: string;
};
export const headerNav: MenuItem[] = [
    {
        key: 'home',
        label: '首页',
        path: '/',
    }, {
        key: 'problem/list',
        label: '题库',
        path: '/problem/list',
    }, {
        key: 'training',
        label: '题单',
        path: '/training',
    }, {
        key: 'rank',
        label: '排行榜',
        path: '/rank',
    }
]