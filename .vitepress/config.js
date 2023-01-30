export default {
    // These are app level configs.
    lang: 'en-US',
    title: 'WDM',
    description: 'Vite & Vue powered static site generator.',

    appearance: 'dark',
    cleanUrls: 'without-subfolders',

    srcDir: './content',
    // outDir: './public',

    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: 'Linux', link: '/linux/' },
            { text: 'Media', link: '/media/' },
            { text: 'WebRTC', link: '/webrtc/' },
            { text: 'C&C++', link: '/cpp/' },
            { text: 'Golang', link: '/golang/' },
            {
                text: 'Other',
                items: [
                    { text: 'SIP', link: '/sip/' },
                    { text: 'P2P', link: '/p2p/' },
                    { text: 'UPnP', link: '/upnp/' }
                ]
            }
        ],

        sidebar: {
            '/linux/': [{
                text: 'Linux 应用',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Index', link: '/linux/' },
                ]
            }, {
                text: 'Linux 网络',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'Index', link: '/linux/' },
                ]
            }, {
                text: 'Linux 系统',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'Index', link: '/linux/' },
                ]
            }, {
                text: 'Linux 驱动',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'Index', link: '/linux/' },
                ]
            }],
            '/media/': [{
                text: '编解码',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'Index', link: '/media/' },
                ]
            }, {
                text: '媒体容器',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'Index', link: '/media/' },
                ]
            }, {
                text: 'FFmpeg',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'Index', link: '/media/' },
                ]
            }],
            '/webrtc/': [{
                text: 'WebRTC',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Index', link: '/webrtc/' },
                ]
            }],
            '/cpp/': [{
                text: 'C&C++',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Index', link: '/cpp/' },
                ]
            }],
            '/golang/': [{
                text: 'Golang',
                collapsible: true,
                collapsed: false,
                items: [
                    { text: 'Index', link: '/golang/' },
                ]
            }],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/wangdm' },
            {
                icon: {
                    svg: '<svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"/></svg>'
                },
                link: 'https://gitee.com/phight'
            }
        ],

        footer: {
            message: '<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备18138543号</a>',
            copyright: 'Copyright © 2020-2023 Deming Wang'
        }
    }
}