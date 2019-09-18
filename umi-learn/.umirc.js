export default {
    plugins: [
        ["umi-plugin-react", {
            dva: true
        }]
    ],
    // history: "hash",
    outputPath: "./out",
    base: "/abc",
    publicPath: "./public/",
    exportStatic: true
}