export default [
    {
        path: "/home", 
        title: "首頁", 
        useable: false, 
    }, 
    {
        path: "/professor", 
        title: "教授介紹", 
        useable: false, 
    },
    {
        path: "#", 
        title: "研究室成果", 
        useable: false, 
        children: [
            { 
                path: "/achievement/award", 
                title: "歷屆榮耀", 
                useable: false,
            }, 
            { 
                path: "/achievement/topic", 
                title: "專題作品", 
                useable: false,
            }, 
        ],
    }, 
    {
        path: "/activity", 
        title: "活動紀錄", 
        useable: false, 
    }, 
    {
        path: "/auth/login", 
        title: "登入", 
        useable: false, 
    }, 
];