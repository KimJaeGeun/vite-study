import { createRouter, createWebHistory } from "vue-router";

import { getComponent } from "@/function/get";
import component from "@/mapping/component";
import name from "@/mapping/router";

const rootPath = "/";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // 루트
        {
            path: rootPath,
            name: name.root,
            component: getComponent(component.layout),
            children: [
                // 루트 패스일 시 자동 이동
                {
                    path: rootPath,
                    redirect: { name: name.view },
                },
                {
                    path: "main",
                    name: name.view,
                    component: getComponent(component.view),
                },
            ],
        },

        // 라우트가 일치하지 않으면 루트 URL로 이동
        {
            path: `${rootPath}:path*`,
            redirect: { name: name.workList },
        },
    ],

    /**
     * 페이지 이동 시마다 최상단으로 스크롤
     * @return offset
     */
    scrollBehavior: () => ({
        left: 0,
        top: 0,
    }),
});

export default router;