import Layout from "@/common/Layout";
import TrainingList from "@/views/admin/training/TrainingList";
import NotFound from "@/views/NotFound";
import Home from "@/views/oj/home/Home";
import Problem from "@/views/oj/problem/Problem";
import ProblemList from "@/views/oj/problem/ProblemList";
import Rank from "@/views/oj/rank/Rank";
import { createBrowserRouter, RouteObject } from "react-router-dom";

export const ojRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/problem/list',
                element: <ProblemList />
            },
            {
                path: '/training',
                element: <TrainingList />
            },
            {
                path: '/rank',
                element: <Rank />
            },
        ]
    },
    {
        path: '/problem/:problemId',
        element: <Problem />
    },
    {
        path: '*',
        element: <NotFound />
    }
]


export const ojRouter = createBrowserRouter(ojRoutes);