import TrainingList from "@/views/admin/training/TrainingList";
import NotFound from "@/views/NotFound";
import Home from "@/views/oj/home/Home";
import ProblemList from "@/views/oj/problem/ProblemList";
import Rank from "@/views/oj/rank/Rank";
import { createBrowserRouter, RouteObject } from "react-router-dom";

export const ojRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/problem',
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
    {
        path: '*',
        element: <NotFound />
    }
]


export const ojRouter = createBrowserRouter(ojRoutes);