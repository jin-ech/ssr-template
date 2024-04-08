const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 打包模式 standalone 动态打包;export 静态打包
    output: 'standalone',
    reactStrictMode: false,
    // 去掉html文件的X-POWER-BY Next.js 请求标头
    poweredByHeader: false,

    // 设置static静态资源请求baseurl 类似 publicPath
    // assetPrefix: isProd ? 'http://127.0.0.1:3000/' : '',

    // 设置页面请求baseUrl 比如访问路由/team => /basePath/team
    // basePath: '/basePath',

    // 自定义打包目录而不是.next目录
    // distDir: 'dist',

    // typescript校验错误依旧执行打包
    // ignoreBuildErrors: true,

    // 请求重定向
    redirects: async () => ([{
        source: '/',
        // 要重定向的路径
        destination: '/team',
        // 如果 true 将使用 308 状态代码，指示客户端/搜索引擎永久缓存重定向，如果 false 将使用 307 状态代码，该状态代码是临时且不缓存的
        permanent: true,
    }]),

    webpack: (
        config, {
            buildId,
            dev,
            isServer,
            defaultLoaders,
            nextRuntime,
            webpack
        }
    ) => {
        return config
    }
};

export default nextConfig;