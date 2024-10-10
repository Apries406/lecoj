import Home from "@/views/oj/Home";
import Announcements from "@/common/Announcements";
import NotFound from "@/views/NotFound";

import { SetNewPassword, UserHome, Setting, Logout } from "@/views/oj/user";
import { ProblemList, Problem } from "@/views/oj/problem";
import { SubmissionDetails, SubmissionList } from "@/views/oj/status";
import { ACMRank, OIRank } from "@/views/oj/rank";

import { ContestList, ContestDetails } from "@/views/oj/contest";
import { ACMScoreBoard, OIScoreBoard } from "@/views/oj/contest/outside";

import { ContestProblemList, ContestRank, ACMInfoAdmin, ContestComment, ContestPrint, ContestAdminPrint, ContestRejudgeAdmin, ScrollBoard } from "@/views/oj/contest/children";
import { Discussion, DiscussionList } from "@/views/oj/discussion";
import { Introduction, Developer } from "@/views/oj/about";
import { Message, UserMsg, SysMsg } from "@/views/oj/message";
import { TrainingList, TraningDetails, TrainingProblemList, TrainingRank } from "@/views/oj/training";
import { GroupList, GroupDetails } from "@/views/oj/group";
import { GroupAnnouncementList, GroupProblemList, GroupTrainingList, GroupContestList, GroupDiscussionList, GroupMemberList, GroupSetting, GroupRank } from "@/views/oj/group/children";

import { RouteObject } from "react-router-dom";

const ojRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },{
        path: '/home',
        element: <Home />
    },{
        path: '/problem',
        element: <ProblemList />
    },{
        path: '/problem/:problemId',
        element: <Problem />
    },{
        path: '/training/:trainingId/problem/:problemId',
        element: <Problem />
    },{
        path: '/contest/:contestId/problem/:problemId',
        element: <Problem />
    },{
        path: '/group/:groupId/problem/:problemId',
        element: <Problem />
    },{
        path: '/group/:groupId/training/:trainingId/problem/:problemId',
        element: <Problem />
    },{
        path: '/training',
        element: <TrainingList />
    },{
        path: '/training/:trainingId',
        element: <TraningDetails />,
        children: [
            {
                path: 'problem',
                element: <TrainingProblemList />
            },{
                path: 'problem/:problemId',
                element: <Problem />
            },{
                path: 'rank',
                element: <TrainingRank />
            }
        ]
    },{
        path: '/contest',
        element: <ContestList />
    },{
        path: '/contest/acm-scoreboard/:contestId',
        element: <ACMScoreBoard />
    },{
        path: '/contest/oi-scoreboard/:contestId',
        element: <OIScoreBoard />
    },{
        path: '/contest/:contestId/',
        element: <ContestDetails />,
        children: [
            {
                path: 'submissions',
                element: <SubmissionList />
            },{
                path: 'problem/:problemId/submissions-detail/:submitId',
                element: <SubmissionDetails />
            },{
                path: 'problems',
                element: <ContestProblemList />
            },{
                path: 'problem/:problemId',
                element: <Problem />
            },{
                path: 'announcements',
                element: <Announcements />
            },{
                path: 'rank',
                element: <ContestRank />
            },{
                path: 'ac-info',
                element: <ACMInfoAdmin />
            },{
                path: 'rejudge',
                element: <ContestRejudgeAdmin />
            },{
                path: 'comment',
                element: <ContestComment />
            },{
                path: 'print',
                element: <ContestPrint />
            },{
                path: 'admin-print',
                element: <ContestAdminPrint />
            },{
                path: 'scroll-board',
                element: <ScrollBoard />
            },
        ]
    },{
        path: '/status',
        element: <SubmissionList />
    },{
        path: '/submission-detail/:submitId',
        element: <SubmissionDetails />
    },{
        path: '/acm-rank',
        element: <ACMRank />
    },{
        path: '/oi-rank',
        element: <OIRank />
    },{
        path: '/reset-password',
        element: <SetNewPassword />
    },{
        path: '/user-home',
        element: <UserHome />
    },{
        path: '/setting',
        element: <Setting />
    },{
        path: '/logout',
        element: <Logout />
    },{
        path: '/discussion',
        element: <DiscussionList />
    },{
        path: '/discussion/:problemId',
        element: <Discussion />
    },{
        path: '/discussion-detail/:discussionId',
        element: <Discussion />
    },{    
        path: '/group',
        element: <GroupList />
    },{
        path: '/group/:groupId',
        element: <GroupDetails />,
        children: [
            {
                path: 'announcement',
                element: <GroupAnnouncementList />
            },{
                path: 'problem',
                element: <GroupProblemList />
            },{
                path: 'problem/:problemId',
                element: <Problem />
            },{
                path: 'training',
                element: <GroupTrainingList />
            },{
                path: 'training/:trainingId/',
                element: <TraningDetails />,
                children: [
                    {
                        path: 'problems',
                        element: <TrainingProblemList />
                    },{
                        path: 'problem/:problemId',
                        element: <Problem />
                    },{
                        path: 'rank',
                        element: <TrainingRank />
                    }
                ]
            },{
                path: 'contest',
                element: <GroupContestList />
            },{
                path: 'status',
                element: <SubmissionList />
            },{
                path: 'submission-detail/:submitId',
                element: <SubmissionDetails />
            },{
                path: 'discussion',
                element: <GroupDiscussionList />
            },{
                path: 'discussion/:problemId',
                element: <GroupDiscussionList />
            },{
                path: 'discussion-detail/:discussionId',
                element: <Discussion />
            },{
                path: 'member',
                element: <GroupMemberList />
            },{
                path: 'setting',
                element: <GroupSetting />
            },{
                path: 'rank',
                element: <GroupRank />
            }
        ]
    },{
        path: '/introduction',
        element: <Introduction />
    },{
        path: '/developer',
        element: <Developer />
    },{
        path: '/message',
        element: <Message />,
        children: [
            {
                path: 'discuss',
                element: <UserMsg />
            },{
                path: 'like-msg',
                element: <UserMsg />
            },{
                path: 'sys-msg',
                element: <SysMsg />
            },{
                path: 'mine-msg',
                element: <SysMsg />
            }
        ]
    },{
        path: '*',
        element: <NotFound />
    }
]

export default ojRoutes;